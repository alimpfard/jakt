let globalImportObject = {};
let namedModules = {};

describe("linking_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/linking_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules["$Mf"] = module;
    globalImportObject["Mf"] = module;
});

describe("linking_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/linking_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules["$Nf"] = module;

    _test("execution of linking_1: call (instance 0)", () => {
        let _call = namedModules["$Mf"].getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = namedModules["$Mf"].invoke(_call);
    });

    _test("execution of linking_1: Mf.call (instance 0)", () => {
        let _Mf_call = namedModules["$Nf"].getExport("Mf.call");
        expect(_Mf_call).not.toBeUndefined();
        let _Mf_call_result = namedModules["$Nf"].invoke(_Mf_call);
    });

    _test("execution of linking_1: call (instance 1)", () => {
        let _call = namedModules["$Nf"].getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = namedModules["$Nf"].invoke(_call);
    });

    _test("execution of linking_1: call Mf.call (instance 0)", () => {
        let _call_Mf_call = namedModules["$Nf"].getExport("call Mf.call");
        expect(_call_Mf_call).not.toBeUndefined();
        let _call_Mf_call_result = namedModules["$Nf"].invoke(_call_Mf_call);
    });
});

describe("linking_2", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/linking_2.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules[":reexport_f"] = module;
    globalImportObject["reexport_f"] = module;
});

describe("linking_3", () => {
    let _test = test;

    _test("execution of linking_3: _inline_test_0 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_0-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("linking_4", () => {
    let _test = test;

    _test("execution of linking_4: _inline_test_1 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_1-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("linking_5", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/linking_5.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules["$Mg"] = module;
    globalImportObject["Mg"] = module;
});

describe("linking_6", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/linking_6.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules["$Ng"] = module;

    _test("execution of linking_6: glob (instance 0)", () => {
        let _glob = namedModules["$Mg"].getExport("glob");
        expect(_glob).not.toBeUndefined();
        let _glob_result = module.getExport(_glob);
    });

    _test("execution of linking_6: Mg.glob (instance 0)", () => {
        let _Mg_glob = namedModules["$Ng"].getExport("Mg.glob");
        expect(_Mg_glob).not.toBeUndefined();
        let _Mg_glob_result = module.getExport(_Mg_glob);
    });

    _test("execution of linking_6: glob (instance 1)", () => {
        let _glob = namedModules["$Ng"].getExport("glob");
        expect(_glob).not.toBeUndefined();
        let _glob_result = module.getExport(_glob);
    });

    _test("execution of linking_6: get (instance 0)", () => {
        let _get = namedModules["$Mg"].getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = namedModules["$Mg"].invoke(_get);
    });

    _test("execution of linking_6: Mg.get (instance 0)", () => {
        let _Mg_get = namedModules["$Ng"].getExport("Mg.get");
        expect(_Mg_get).not.toBeUndefined();
        let _Mg_get_result = namedModules["$Ng"].invoke(_Mg_get);
    });

    _test("execution of linking_6: get (instance 1)", () => {
        let _get = namedModules["$Ng"].getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = namedModules["$Ng"].invoke(_get);
    });

    _test("execution of linking_6: mut_glob (instance 0)", () => {
        let _mut_glob = namedModules["$Mg"].getExport("mut_glob");
        expect(_mut_glob).not.toBeUndefined();
        let _mut_glob_result = module.getExport(_mut_glob);
    });

    _test("execution of linking_6: Mg.mut_glob (instance 0)", () => {
        let _Mg_mut_glob = namedModules["$Ng"].getExport("Mg.mut_glob");
        expect(_Mg_mut_glob).not.toBeUndefined();
        let _Mg_mut_glob_result = module.getExport(_Mg_mut_glob);
    });

    _test("execution of linking_6: get_mut (instance 0)", () => {
        let _get_mut = namedModules["$Mg"].getExport("get_mut");
        expect(_get_mut).not.toBeUndefined();
        let _get_mut_result = namedModules["$Mg"].invoke(_get_mut);
    });

    _test("execution of linking_6: Mg.get_mut (instance 0)", () => {
        let _Mg_get_mut = namedModules["$Ng"].getExport("Mg.get_mut");
        expect(_Mg_get_mut).not.toBeUndefined();
        let _Mg_get_mut_result = namedModules["$Ng"].invoke(_Mg_get_mut);
    });

    _test("execution of linking_6: set_mut (instance 0)", () => {
        let _set_mut = namedModules["$Mg"].getExport("set_mut");
        expect(_set_mut).not.toBeUndefined();
        let _set_mut_result = namedModules["$Mg"].invoke(_set_mut, 241);
    });

    _test("execution of linking_6: mut_glob (instance 1)", () => {
        let _mut_glob = namedModules["$Mg"].getExport("mut_glob");
        expect(_mut_glob).not.toBeUndefined();
        let _mut_glob_result = module.getExport(_mut_glob);
    });

    _test("execution of linking_6: Mg.mut_glob (instance 1)", () => {
        let _Mg_mut_glob = namedModules["$Ng"].getExport("Mg.mut_glob");
        expect(_Mg_mut_glob).not.toBeUndefined();
        let _Mg_mut_glob_result = module.getExport(_Mg_mut_glob);
    });

    _test("execution of linking_6: get_mut (instance 1)", () => {
        let _get_mut = namedModules["$Mg"].getExport("get_mut");
        expect(_get_mut).not.toBeUndefined();
        let _get_mut_result = namedModules["$Mg"].invoke(_get_mut);
    });

    _test("execution of linking_6: Mg.get_mut (instance 1)", () => {
        let _Mg_get_mut = namedModules["$Ng"].getExport("Mg.get_mut");
        expect(_Mg_get_mut).not.toBeUndefined();
        let _Mg_get_mut_result = namedModules["$Ng"].invoke(_Mg_get_mut);
    });
});

describe("linking_7", () => {
    let _test = test;

    _test("execution of linking_7: _inline_test_2 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_2-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("linking_8", () => {
    let _test = test;

    _test("execution of linking_8: _inline_test_3 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_3-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("linking_9", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/linking_9.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules["$Mref_ex"] = module;
    globalImportObject["Mref_ex"] = module;
});

describe("linking_10", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/linking_10.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules["$Mref_im"] = module;
});

describe("linking_11", () => {
    let _test = test;

    _test("execution of linking_11: _inline_test_4 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_4-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("linking_12", () => {
    let _test = test;

    _test("execution of linking_12: _inline_test_5 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_5-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("linking_13", () => {
    let _test = test;

    _test("execution of linking_13: _inline_test_6 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_6-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("linking_14", () => {
    let _test = test;

    _test("execution of linking_14: _inline_test_7 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_7-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("linking_15", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/linking_15.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules["$Mt"] = module;
    globalImportObject["Mt"] = module;
});

describe("linking_16", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/linking_16.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules["$Nt"] = module;

    _test("execution of linking_16: call (instance 2)", () => {
        let _call = namedModules["$Mt"].getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = namedModules["$Mt"].invoke(_call, 2);
    });

    _test("execution of linking_16: Mt.call (instance 0)", () => {
        let _Mt_call = namedModules["$Nt"].getExport("Mt.call");
        expect(_Mt_call).not.toBeUndefined();
        let _Mt_call_result = namedModules["$Nt"].invoke(_Mt_call, 2);
    });

    _test("execution of linking_16: call (instance 3)", () => {
        let _call = namedModules["$Nt"].getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = namedModules["$Nt"].invoke(_call, 2);
    });

    _test("execution of linking_16: call Mt.call (instance 0)", () => {
        let _call_Mt_call = namedModules["$Nt"].getExport("call Mt.call");
        expect(_call_Mt_call).not.toBeUndefined();
        let _call_Mt_call_result = namedModules["$Nt"].invoke(_call_Mt_call, 2);
    });

    _test("execution of linking_16: call (instance 4)", () => {
        let _call = namedModules["$Mt"].getExport("call");
        expect(_call).not.toBeUndefined();
        expect(() => namedModules["$Mt"].invoke(_call, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of linking_16: Mt.call (instance 1)", () => {
        let _Mt_call = namedModules["$Nt"].getExport("Mt.call");
        expect(_Mt_call).not.toBeUndefined();
        expect(() =>
            namedModules["$Nt"].invoke(_Mt_call, 1).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of linking_16: call (instance 5)", () => {
        let _call = namedModules["$Nt"].getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = namedModules["$Nt"].invoke(_call, 1);
    });

    _test("execution of linking_16: call Mt.call (instance 1)", () => {
        let _call_Mt_call = namedModules["$Nt"].getExport("call Mt.call");
        expect(_call_Mt_call).not.toBeUndefined();
        expect(() =>
            namedModules["$Nt"].invoke(_call_Mt_call, 1).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of linking_16: call (instance 6)", () => {
        let _call = namedModules["$Mt"].getExport("call");
        expect(_call).not.toBeUndefined();
        expect(() => namedModules["$Mt"].invoke(_call, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of linking_16: Mt.call (instance 2)", () => {
        let _Mt_call = namedModules["$Nt"].getExport("Mt.call");
        expect(_Mt_call).not.toBeUndefined();
        expect(() =>
            namedModules["$Nt"].invoke(_Mt_call, 0).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of linking_16: call (instance 7)", () => {
        let _call = namedModules["$Nt"].getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = namedModules["$Nt"].invoke(_call, 0);
    });

    _test("execution of linking_16: call Mt.call (instance 2)", () => {
        let _call_Mt_call = namedModules["$Nt"].getExport("call Mt.call");
        expect(_call_Mt_call).not.toBeUndefined();
        expect(() =>
            namedModules["$Nt"].invoke(_call_Mt_call, 0).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of linking_16: call (instance 8)", () => {
        let _call = namedModules["$Mt"].getExport("call");
        expect(_call).not.toBeUndefined();
        expect(() => namedModules["$Mt"].invoke(_call, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of linking_16: Mt.call (instance 3)", () => {
        let _Mt_call = namedModules["$Nt"].getExport("Mt.call");
        expect(_Mt_call).not.toBeUndefined();
        expect(() =>
            namedModules["$Nt"].invoke(_Mt_call, 20).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of linking_16: call (instance 9)", () => {
        let _call = namedModules["$Nt"].getExport("call");
        expect(_call).not.toBeUndefined();
        expect(() => namedModules["$Nt"].invoke(_call, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of linking_16: call Mt.call (instance 3)", () => {
        let _call_Mt_call = namedModules["$Nt"].getExport("call Mt.call");
        expect(_call_Mt_call).not.toBeUndefined();
        expect(() =>
            namedModules["$Nt"].invoke(_call_Mt_call, 20).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of linking_16: call (instance 10)", () => {
        let _call = namedModules["$Nt"].getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = namedModules["$Nt"].invoke(_call, 3);
    });

    _test("execution of linking_16: call (instance 11)", () => {
        let _call = namedModules["$Nt"].getExport("call");
        expect(_call).not.toBeUndefined();
        expect(() => namedModules["$Nt"].invoke(_call, 4).toThrow(TypeError, "Execution trapped"));
    });
});

describe("linking_17", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/linking_17.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules["$Ot"] = module;

    _test("execution of linking_17: call (instance 12)", () => {
        let _call = namedModules["$Mt"].getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = namedModules["$Mt"].invoke(_call, 3);
    });

    _test("execution of linking_17: Mt.call (instance 4)", () => {
        let _Mt_call = namedModules["$Nt"].getExport("Mt.call");
        expect(_Mt_call).not.toBeUndefined();
        let _Mt_call_result = namedModules["$Nt"].invoke(_Mt_call, 3);
    });

    _test("execution of linking_17: call Mt.call (instance 4)", () => {
        let _call_Mt_call = namedModules["$Nt"].getExport("call Mt.call");
        expect(_call_Mt_call).not.toBeUndefined();
        let _call_Mt_call_result = namedModules["$Nt"].invoke(_call_Mt_call, 3);
    });

    _test("execution of linking_17: call (instance 13)", () => {
        let _call = namedModules["$Ot"].getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = namedModules["$Ot"].invoke(_call, 3);
    });

    _test("execution of linking_17: call (instance 14)", () => {
        let _call = namedModules["$Mt"].getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = namedModules["$Mt"].invoke(_call, 2);
    });

    _test("execution of linking_17: Mt.call (instance 5)", () => {
        let _Mt_call = namedModules["$Nt"].getExport("Mt.call");
        expect(_Mt_call).not.toBeUndefined();
        let _Mt_call_result = namedModules["$Nt"].invoke(_Mt_call, 2);
    });

    _test("execution of linking_17: call (instance 15)", () => {
        let _call = namedModules["$Nt"].getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = namedModules["$Nt"].invoke(_call, 2);
    });

    _test("execution of linking_17: call Mt.call (instance 5)", () => {
        let _call_Mt_call = namedModules["$Nt"].getExport("call Mt.call");
        expect(_call_Mt_call).not.toBeUndefined();
        let _call_Mt_call_result = namedModules["$Nt"].invoke(_call_Mt_call, 2);
    });

    _test("execution of linking_17: call (instance 16)", () => {
        let _call = namedModules["$Ot"].getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = namedModules["$Ot"].invoke(_call, 2);
    });

    _test("execution of linking_17: call (instance 17)", () => {
        let _call = namedModules["$Mt"].getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = namedModules["$Mt"].invoke(_call, 1);
    });

    _test("execution of linking_17: Mt.call (instance 6)", () => {
        let _Mt_call = namedModules["$Nt"].getExport("Mt.call");
        expect(_Mt_call).not.toBeUndefined();
        let _Mt_call_result = namedModules["$Nt"].invoke(_Mt_call, 1);
    });

    _test("execution of linking_17: call (instance 18)", () => {
        let _call = namedModules["$Nt"].getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = namedModules["$Nt"].invoke(_call, 1);
    });

    _test("execution of linking_17: call Mt.call (instance 6)", () => {
        let _call_Mt_call = namedModules["$Nt"].getExport("call Mt.call");
        expect(_call_Mt_call).not.toBeUndefined();
        let _call_Mt_call_result = namedModules["$Nt"].invoke(_call_Mt_call, 1);
    });

    _test("execution of linking_17: call (instance 19)", () => {
        let _call = namedModules["$Ot"].getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = namedModules["$Ot"].invoke(_call, 1);
    });

    _test("execution of linking_17: call (instance 20)", () => {
        let _call = namedModules["$Mt"].getExport("call");
        expect(_call).not.toBeUndefined();
        expect(() => namedModules["$Mt"].invoke(_call, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of linking_17: Mt.call (instance 7)", () => {
        let _Mt_call = namedModules["$Nt"].getExport("Mt.call");
        expect(_Mt_call).not.toBeUndefined();
        expect(() =>
            namedModules["$Nt"].invoke(_Mt_call, 0).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of linking_17: call (instance 21)", () => {
        let _call = namedModules["$Nt"].getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = namedModules["$Nt"].invoke(_call, 0);
    });

    _test("execution of linking_17: call Mt.call (instance 7)", () => {
        let _call_Mt_call = namedModules["$Nt"].getExport("call Mt.call");
        expect(_call_Mt_call).not.toBeUndefined();
        expect(() =>
            namedModules["$Nt"].invoke(_call_Mt_call, 0).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of linking_17: call (instance 22)", () => {
        let _call = namedModules["$Ot"].getExport("call");
        expect(_call).not.toBeUndefined();
        expect(() => namedModules["$Ot"].invoke(_call, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of linking_17: call (instance 23)", () => {
        let _call = namedModules["$Ot"].getExport("call");
        expect(_call).not.toBeUndefined();
        expect(() => namedModules["$Ot"].invoke(_call, 20).toThrow(TypeError, "Execution trapped"));
    });
});

describe("linking_18", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/linking_18.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("linking_19", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/linking_19.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules["$G1"] = module;
    globalImportObject["G1"] = module;
});

describe("linking_20", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/linking_20.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules["$G2"] = module;

    _test("execution of linking_20: g (instance 0)", () => {
        let _g = namedModules["$G2"].getExport("g");
        expect(_g).not.toBeUndefined();
        let _g_result = module.getExport(_g);
    });

    /* Unknown assertion trap */ _test.skip(
        "execution of linking_20: <unknown> (instance 0)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );
});

describe("linking_21", () => {
    let _test = test;

    _test("execution of linking_21: _inline_test_8 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_8-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });

    _test("execution of linking_21: call (instance 24)", () => {
        let _call = namedModules["$Mt"].getExport("call");
        expect(_call).not.toBeUndefined();
        expect(() => namedModules["$Mt"].invoke(_call, 7).toThrow(TypeError, "Execution trapped"));
    });

    /* Unknown assertion trap */ _test.skip(
        "execution of linking_21: <unknown> (instance 1)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    _test("execution of linking_21: call (instance 25)", () => {
        let _call = namedModules["$Mt"].getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = namedModules["$Mt"].invoke(_call, 7);
    });

    _test("execution of linking_21: call (instance 26)", () => {
        let _call = namedModules["$Mt"].getExport("call");
        expect(_call).not.toBeUndefined();
        expect(() => namedModules["$Mt"].invoke(_call, 8).toThrow(TypeError, "Execution trapped"));
    });

    /* Unknown assertion trap */ _test.skip(
        "execution of linking_21: <unknown> (instance 2)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    _test("execution of linking_21: call (instance 27)", () => {
        let _call = namedModules["$Mt"].getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = namedModules["$Mt"].invoke(_call, 7);
    });
});

describe("linking_22", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/linking_22.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules["$Mtable_ex"] = module;
    globalImportObject["Mtable_ex"] = module;
});

describe("linking_23", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/linking_23.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("linking_24", () => {
    let _test = test;

    _test("execution of linking_24: _inline_test_9 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_9-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("linking_25", () => {
    let _test = test;

    _test("execution of linking_25: _inline_test_10 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_10-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("linking_26", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/linking_26.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules["$Mm"] = module;
    globalImportObject["Mm"] = module;
});

describe("linking_27", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/linking_27.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules["$Nm"] = module;

    _test("execution of linking_27: load (instance 0)", () => {
        let _load = namedModules["$Mm"].getExport("load");
        expect(_load).not.toBeUndefined();
        let _load_result = namedModules["$Mm"].invoke(_load, 12);
    });

    _test("execution of linking_27: Mm.load (instance 0)", () => {
        let _Mm_load = namedModules["$Nm"].getExport("Mm.load");
        expect(_Mm_load).not.toBeUndefined();
        let _Mm_load_result = namedModules["$Nm"].invoke(_Mm_load, 12);
    });

    _test("execution of linking_27: load (instance 1)", () => {
        let _load = namedModules["$Nm"].getExport("load");
        expect(_load).not.toBeUndefined();
        let _load_result = namedModules["$Nm"].invoke(_load, 12);
    });
});

describe("linking_28", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/linking_28.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules["$Om"] = module;

    _test("execution of linking_28: load (instance 2)", () => {
        let _load = namedModules["$Mm"].getExport("load");
        expect(_load).not.toBeUndefined();
        let _load_result = namedModules["$Mm"].invoke(_load, 12);
    });

    _test("execution of linking_28: Mm.load (instance 1)", () => {
        let _Mm_load = namedModules["$Nm"].getExport("Mm.load");
        expect(_Mm_load).not.toBeUndefined();
        let _Mm_load_result = namedModules["$Nm"].invoke(_Mm_load, 12);
    });

    _test("execution of linking_28: load (instance 3)", () => {
        let _load = namedModules["$Nm"].getExport("load");
        expect(_load).not.toBeUndefined();
        let _load_result = namedModules["$Nm"].invoke(_load, 12);
    });

    _test("execution of linking_28: load (instance 4)", () => {
        let _load = namedModules["$Om"].getExport("load");
        expect(_load).not.toBeUndefined();
        let _load_result = namedModules["$Om"].invoke(_load, 12);
    });
});

describe("linking_29", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/linking_29.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    /* Unknown assertion trap */ _test.skip(
        "execution of linking_29: <unknown> (instance 3)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );
});

describe("linking_30", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/linking_30.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules["$Pm"] = module;

    _test("execution of linking_30: grow (instance 0)", () => {
        let _grow = namedModules["$Pm"].getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = namedModules["$Pm"].invoke(_grow, 0);
    });

    _test("execution of linking_30: grow (instance 1)", () => {
        let _grow = namedModules["$Pm"].getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = namedModules["$Pm"].invoke(_grow, 2);
    });

    _test("execution of linking_30: grow (instance 2)", () => {
        let _grow = namedModules["$Pm"].getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = namedModules["$Pm"].invoke(_grow, 0);
    });

    _test("execution of linking_30: grow (instance 3)", () => {
        let _grow = namedModules["$Pm"].getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = namedModules["$Pm"].invoke(_grow, 1);
    });

    _test("execution of linking_30: grow (instance 4)", () => {
        let _grow = namedModules["$Pm"].getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = namedModules["$Pm"].invoke(_grow, 1);
    });

    _test("execution of linking_30: grow (instance 5)", () => {
        let _grow = namedModules["$Pm"].getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = namedModules["$Pm"].invoke(_grow, 0);
    });

    _test("execution of linking_30: grow (instance 6)", () => {
        let _grow = namedModules["$Pm"].getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = namedModules["$Pm"].invoke(_grow, 1);
    });

    _test("execution of linking_30: grow (instance 7)", () => {
        let _grow = namedModules["$Pm"].getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = namedModules["$Pm"].invoke(_grow, 0);
    });
});

describe("linking_31", () => {
    let _test = test;

    _test("execution of linking_31: _inline_test_11 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_11-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });

    _test("execution of linking_31: load (instance 5)", () => {
        let _load = namedModules["$Mm"].getExport("load");
        expect(_load).not.toBeUndefined();
        let _load_result = namedModules["$Mm"].invoke(_load, 0);
    });

    /* Unknown assertion trap */ _test.skip(
        "execution of linking_31: <unknown> (instance 4)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    _test("execution of linking_31: load (instance 6)", () => {
        let _load = namedModules["$Mm"].getExport("load");
        expect(_load).not.toBeUndefined();
        let _load_result = namedModules["$Mm"].invoke(_load, 0);
    });

    _test("execution of linking_31: load (instance 7)", () => {
        let _load = namedModules["$Mm"].getExport("load");
        expect(_load).not.toBeUndefined();
        let _load_result = namedModules["$Mm"].invoke(_load, 327670);
    });

    /* Unknown assertion trap */ _test.skip(
        "execution of linking_31: <unknown> (instance 5)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    _test("execution of linking_31: load (instance 8)", () => {
        let _load = namedModules["$Mm"].getExport("load");
        expect(_load).not.toBeUndefined();
        let _load_result = namedModules["$Mm"].invoke(_load, 0);
    });
});

describe("linking_32", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/linking_32.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules["$Ms"] = module;
    globalImportObject["Ms"] = module;

    /* Unknown assertion trap */ _test.skip(
        "execution of linking_32: <unknown> (instance 6)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    _test("execution of linking_32: get memory[0] (instance 0)", () => {
        let _get_memory_0_ = namedModules["$Ms"].getExport("get memory[0]");
        expect(_get_memory_0_).not.toBeUndefined();
        let _get_memory_0__result = namedModules["$Ms"].invoke(_get_memory_0_);
    });

    _test("execution of linking_32: get table[0] (instance 0)", () => {
        let _get_table_0_ = namedModules["$Ms"].getExport("get table[0]");
        expect(_get_table_0_).not.toBeUndefined();
        let _get_table_0__result = namedModules["$Ms"].invoke(_get_table_0_);
    });
});
