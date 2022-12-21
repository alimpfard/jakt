let globalImportObject = {};
let namedModules = {};

describe("bulk_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/bulk_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("bulk_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/bulk_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("bulk_2", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/bulk_2.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of bulk_2: fill (instance 0)", () => {
        let _fill = module.getExport("fill");
        expect(_fill).not.toBeUndefined();
        module.invoke(_fill, 0, 0);
    });

    _test("execution of bulk_2: load8_u (instance 0)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 0);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of bulk_2: load8_u (instance 1)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 1);
        expect(_load8_u_result).toBe(255);
    });

    _test("execution of bulk_2: load8_u (instance 2)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 2);
        expect(_load8_u_result).toBe(255);
    });

    _test("execution of bulk_2: load8_u (instance 3)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 3);
        expect(_load8_u_result).toBe(255);
    });

    _test("execution of bulk_2: load8_u (instance 4)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 4);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of bulk_2: fill (instance 1)", () => {
        let _fill = module.getExport("fill");
        expect(_fill).not.toBeUndefined();
        module.invoke(_fill, 0, 0);
    });

    _test("execution of bulk_2: load8_u (instance 5)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 0);
        expect(_load8_u_result).toBe(170);
    });

    _test("execution of bulk_2: load8_u (instance 6)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 1);
        expect(_load8_u_result).toBe(170);
    });

    _test("execution of bulk_2: fill (instance 2)", () => {
        let _fill = module.getExport("fill");
        expect(_fill).not.toBeUndefined();
        module.invoke(_fill, 0, 0);
    });

    _test("execution of bulk_2: fill (instance 3)", () => {
        let _fill = module.getExport("fill");
        expect(_fill).not.toBeUndefined();
        expect(() => module.invoke(_fill, 65280, 1, 257).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of bulk_2: load8_u (instance 7)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 65280);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of bulk_2: load8_u (instance 8)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 65535);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of bulk_2: fill (instance 4)", () => {
        let _fill = module.getExport("fill");
        expect(_fill).not.toBeUndefined();
        module.invoke(_fill, 0, 0);
    });

    _test("execution of bulk_2: fill (instance 5)", () => {
        let _fill = module.getExport("fill");
        expect(_fill).not.toBeUndefined();
        expect(() => module.invoke(_fill, 65537, 0, 0).toThrow(TypeError, "Execution trapped"));
    });
});

describe("bulk_3", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/bulk_3.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of bulk_3: copy (instance 0)", () => {
        let _copy = module.getExport("copy");
        expect(_copy).not.toBeUndefined();
        module.invoke(_copy, 0, 0);
    });

    _test("execution of bulk_3: load8_u (instance 9)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 9);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of bulk_3: load8_u (instance 10)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 10);
        expect(_load8_u_result).toBe(170);
    });

    _test("execution of bulk_3: load8_u (instance 11)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 11);
        expect(_load8_u_result).toBe(187);
    });

    _test("execution of bulk_3: load8_u (instance 12)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 12);
        expect(_load8_u_result).toBe(204);
    });

    _test("execution of bulk_3: load8_u (instance 13)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 13);
        expect(_load8_u_result).toBe(221);
    });

    _test("execution of bulk_3: load8_u (instance 14)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 14);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of bulk_3: copy (instance 1)", () => {
        let _copy = module.getExport("copy");
        expect(_copy).not.toBeUndefined();
        module.invoke(_copy, 0, 0);
    });

    _test("execution of bulk_3: load8_u (instance 15)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 8);
        expect(_load8_u_result).toBe(170);
    });

    _test("execution of bulk_3: load8_u (instance 16)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 9);
        expect(_load8_u_result).toBe(187);
    });

    _test("execution of bulk_3: load8_u (instance 17)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 10);
        expect(_load8_u_result).toBe(204);
    });

    _test("execution of bulk_3: load8_u (instance 18)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 11);
        expect(_load8_u_result).toBe(221);
    });

    _test("execution of bulk_3: load8_u (instance 19)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 12);
        expect(_load8_u_result).toBe(204);
    });

    _test("execution of bulk_3: load8_u (instance 20)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 13);
        expect(_load8_u_result).toBe(221);
    });

    _test("execution of bulk_3: copy (instance 2)", () => {
        let _copy = module.getExport("copy");
        expect(_copy).not.toBeUndefined();
        module.invoke(_copy, 0, 0);
    });

    _test("execution of bulk_3: load8_u (instance 21)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 10);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of bulk_3: load8_u (instance 22)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 11);
        expect(_load8_u_result).toBe(170);
    });

    _test("execution of bulk_3: load8_u (instance 23)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 12);
        expect(_load8_u_result).toBe(187);
    });

    _test("execution of bulk_3: load8_u (instance 24)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 13);
        expect(_load8_u_result).toBe(204);
    });

    _test("execution of bulk_3: load8_u (instance 25)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 14);
        expect(_load8_u_result).toBe(221);
    });

    _test("execution of bulk_3: load8_u (instance 26)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 15);
        expect(_load8_u_result).toBe(204);
    });

    _test("execution of bulk_3: load8_u (instance 27)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 16);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of bulk_3: copy (instance 3)", () => {
        let _copy = module.getExport("copy");
        expect(_copy).not.toBeUndefined();
        module.invoke(_copy, 0, 0);
    });

    _test("execution of bulk_3: copy (instance 4)", () => {
        let _copy = module.getExport("copy");
        expect(_copy).not.toBeUndefined();
        module.invoke(_copy, 0, 0);
    });

    _test("execution of bulk_3: copy (instance 5)", () => {
        let _copy = module.getExport("copy");
        expect(_copy).not.toBeUndefined();
        module.invoke(_copy, 0, 0);
    });

    _test("execution of bulk_3: copy (instance 6)", () => {
        let _copy = module.getExport("copy");
        expect(_copy).not.toBeUndefined();
        module.invoke(_copy, 0, 0);
    });

    _test("execution of bulk_3: copy (instance 7)", () => {
        let _copy = module.getExport("copy");
        expect(_copy).not.toBeUndefined();
        expect(() => module.invoke(_copy, 65537, 0, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of bulk_3: copy (instance 8)", () => {
        let _copy = module.getExport("copy");
        expect(_copy).not.toBeUndefined();
        expect(() => module.invoke(_copy, 0, 65537, 0).toThrow(TypeError, "Execution trapped"));
    });
});

describe("bulk_4", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/bulk_4.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of bulk_4: init (instance 0)", () => {
        let _init = module.getExport("init");
        expect(_init).not.toBeUndefined();
        module.invoke(_init, 0, 0);
    });

    _test("execution of bulk_4: load8_u (instance 28)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 0);
        expect(_load8_u_result).toBe(187);
    });

    _test("execution of bulk_4: load8_u (instance 29)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 1);
        expect(_load8_u_result).toBe(204);
    });

    _test("execution of bulk_4: load8_u (instance 30)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 2);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of bulk_4: init (instance 1)", () => {
        let _init = module.getExport("init");
        expect(_init).not.toBeUndefined();
        module.invoke(_init, 0, 0);
    });

    _test("execution of bulk_4: init (instance 2)", () => {
        let _init = module.getExport("init");
        expect(_init).not.toBeUndefined();
        expect(() => module.invoke(_init, 65534, 0, 3).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of bulk_4: load8_u (instance 31)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 65534);
        expect(_load8_u_result).toBe(204);
    });

    _test("execution of bulk_4: load8_u (instance 32)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 65535);
        expect(_load8_u_result).toBe(221);
    });

    _test("execution of bulk_4: init (instance 3)", () => {
        let _init = module.getExport("init");
        expect(_init).not.toBeUndefined();
        module.invoke(_init, 0, 0);
    });

    _test("execution of bulk_4: init (instance 4)", () => {
        let _init = module.getExport("init");
        expect(_init).not.toBeUndefined();
        module.invoke(_init, 0, 0);
    });

    _test("execution of bulk_4: init (instance 5)", () => {
        let _init = module.getExport("init");
        expect(_init).not.toBeUndefined();
        expect(() => module.invoke(_init, 65537, 0, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of bulk_4: init (instance 6)", () => {
        let _init = module.getExport("init");
        expect(_init).not.toBeUndefined();
        expect(() => module.invoke(_init, 0, 5, 0).toThrow(TypeError, "Execution trapped"));
    });
});

describe("bulk_5", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/bulk_5.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of bulk_5: init_passive (instance 0)", () => {
        let _init_passive = module.getExport("init_passive");
        expect(_init_passive).not.toBeUndefined();
        module.invoke(_init_passive, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    });

    _test("execution of bulk_5: drop_passive (instance 0)", () => {
        let _drop_passive = module.getExport("drop_passive");
        expect(_drop_passive).not.toBeUndefined();
        module.invoke(_drop_passive, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    });

    _test("execution of bulk_5: drop_passive (instance 1)", () => {
        let _drop_passive = module.getExport("drop_passive");
        expect(_drop_passive).not.toBeUndefined();
        module.invoke(_drop_passive, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    });

    _test("execution of bulk_5: init_passive (instance 1)", () => {
        let _init_passive = module.getExport("init_passive");
        expect(_init_passive).not.toBeUndefined();
        let _init_passive_result = module.invoke(_init_passive, 0);
    });

    _test("execution of bulk_5: init_passive (instance 2)", () => {
        let _init_passive = module.getExport("init_passive");
        expect(_init_passive).not.toBeUndefined();
        expect(() => module.invoke(_init_passive, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of bulk_5: init_passive (instance 3)", () => {
        let _init_passive = module.getExport("init_passive");
        expect(_init_passive).not.toBeUndefined();
        module.invoke(_init_passive, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    });

    _test("execution of bulk_5: drop_active (instance 0)", () => {
        let _drop_active = module.getExport("drop_active");
        expect(_drop_active).not.toBeUndefined();
        module.invoke(_drop_active, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    });

    _test("execution of bulk_5: init_active (instance 0)", () => {
        let _init_active = module.getExport("init_active");
        expect(_init_active).not.toBeUndefined();
        let _init_active_result = module.invoke(_init_active, 0);
    });

    _test("execution of bulk_5: init_active (instance 1)", () => {
        let _init_active = module.getExport("init_active");
        expect(_init_active).not.toBeUndefined();
        expect(() => module.invoke(_init_active, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of bulk_5: init_active (instance 2)", () => {
        let _init_active = module.getExport("init_active");
        expect(_init_active).not.toBeUndefined();
        module.invoke(_init_active, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    });
});

describe("bulk_6", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/bulk_6.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("bulk_7", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/bulk_7.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("bulk_8", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/bulk_8.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of bulk_8: init (instance 7)", () => {
        let _init = module.getExport("init");
        expect(_init).not.toBeUndefined();
        expect(() => module.invoke(_init, 2, 0, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of bulk_8: call (instance 0)", () => {
        let _call = module.getExport("call");
        expect(_call).not.toBeUndefined();
        expect(() => module.invoke(_call, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of bulk_8: init (instance 8)", () => {
        let _init = module.getExport("init");
        expect(_init).not.toBeUndefined();
        module.invoke(_init, 0, 0);
    });

    _test("execution of bulk_8: call (instance 1)", () => {
        let _call = module.getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = module.invoke(_call, 0);
        expect(_call_result).toBe(1);
    });

    _test("execution of bulk_8: call (instance 2)", () => {
        let _call = module.getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = module.invoke(_call, 1);
        expect(_call_result).toBe(0);
    });

    _test("execution of bulk_8: call (instance 3)", () => {
        let _call = module.getExport("call");
        expect(_call).not.toBeUndefined();
        expect(() => module.invoke(_call, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of bulk_8: init (instance 9)", () => {
        let _init = module.getExport("init");
        expect(_init).not.toBeUndefined();
        module.invoke(_init, 0, 0);
    });

    _test("execution of bulk_8: init (instance 10)", () => {
        let _init = module.getExport("init");
        expect(_init).not.toBeUndefined();
        module.invoke(_init, 0, 0);
    });

    _test("execution of bulk_8: init (instance 11)", () => {
        let _init = module.getExport("init");
        expect(_init).not.toBeUndefined();
        module.invoke(_init, 0, 0);
    });

    _test("execution of bulk_8: init (instance 12)", () => {
        let _init = module.getExport("init");
        expect(_init).not.toBeUndefined();
        expect(() => module.invoke(_init, 4, 0, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of bulk_8: init (instance 13)", () => {
        let _init = module.getExport("init");
        expect(_init).not.toBeUndefined();
        expect(() => module.invoke(_init, 0, 5, 0).toThrow(TypeError, "Execution trapped"));
    });
});

describe("bulk_9", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/bulk_9.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of bulk_9: init_passive (instance 4)", () => {
        let _init_passive = module.getExport("init_passive");
        expect(_init_passive).not.toBeUndefined();
        module.invoke(_init_passive, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    });

    _test("execution of bulk_9: drop_passive (instance 2)", () => {
        let _drop_passive = module.getExport("drop_passive");
        expect(_drop_passive).not.toBeUndefined();
        module.invoke(_drop_passive, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    });

    _test("execution of bulk_9: drop_passive (instance 3)", () => {
        let _drop_passive = module.getExport("drop_passive");
        expect(_drop_passive).not.toBeUndefined();
        module.invoke(_drop_passive, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    });

    _test("execution of bulk_9: init_passive (instance 5)", () => {
        let _init_passive = module.getExport("init_passive");
        expect(_init_passive).not.toBeUndefined();
        let _init_passive_result = module.invoke(_init_passive, 0);
    });

    _test("execution of bulk_9: init_passive (instance 6)", () => {
        let _init_passive = module.getExport("init_passive");
        expect(_init_passive).not.toBeUndefined();
        expect(() => module.invoke(_init_passive, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of bulk_9: init_passive (instance 7)", () => {
        let _init_passive = module.getExport("init_passive");
        expect(_init_passive).not.toBeUndefined();
        module.invoke(_init_passive, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    });

    _test("execution of bulk_9: drop_active (instance 1)", () => {
        let _drop_active = module.getExport("drop_active");
        expect(_drop_active).not.toBeUndefined();
        module.invoke(_drop_active, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    });

    _test("execution of bulk_9: init_active (instance 3)", () => {
        let _init_active = module.getExport("init_active");
        expect(_init_active).not.toBeUndefined();
        let _init_active_result = module.invoke(_init_active, 0);
    });

    _test("execution of bulk_9: init_active (instance 4)", () => {
        let _init_active = module.getExport("init_active");
        expect(_init_active).not.toBeUndefined();
        expect(() => module.invoke(_init_active, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of bulk_9: init_active (instance 5)", () => {
        let _init_active = module.getExport("init_active");
        expect(_init_active).not.toBeUndefined();
        module.invoke(_init_active, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    });
});

describe("bulk_10", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/bulk_10.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("bulk_11", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/bulk_11.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("bulk_12", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/bulk_12.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of bulk_12: copy (instance 9)", () => {
        let _copy = module.getExport("copy");
        expect(_copy).not.toBeUndefined();
        module.invoke(_copy, 0, 0);
    });

    _test("execution of bulk_12: call (instance 4)", () => {
        let _call = module.getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = module.invoke(_call, 3);
        expect(_call_result).toBe(0);
    });

    _test("execution of bulk_12: call (instance 5)", () => {
        let _call = module.getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = module.invoke(_call, 4);
        expect(_call_result).toBe(1);
    });

    _test("execution of bulk_12: call (instance 6)", () => {
        let _call = module.getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = module.invoke(_call, 5);
        expect(_call_result).toBe(2);
    });

    _test("execution of bulk_12: copy (instance 10)", () => {
        let _copy = module.getExport("copy");
        expect(_copy).not.toBeUndefined();
        module.invoke(_copy, 0, 0);
    });

    _test("execution of bulk_12: call (instance 7)", () => {
        let _call = module.getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = module.invoke(_call, 0);
        expect(_call_result).toBe(1);
    });

    _test("execution of bulk_12: call (instance 8)", () => {
        let _call = module.getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = module.invoke(_call, 1);
        expect(_call_result).toBe(2);
    });

    _test("execution of bulk_12: call (instance 9)", () => {
        let _call = module.getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = module.invoke(_call, 2);
        expect(_call_result).toBe(0);
    });

    _test("execution of bulk_12: copy (instance 11)", () => {
        let _copy = module.getExport("copy");
        expect(_copy).not.toBeUndefined();
        module.invoke(_copy, 0, 0);
    });

    _test("execution of bulk_12: call (instance 10)", () => {
        let _call = module.getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = module.invoke(_call, 2);
        expect(_call_result).toBe(1);
    });

    _test("execution of bulk_12: call (instance 11)", () => {
        let _call = module.getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = module.invoke(_call, 3);
        expect(_call_result).toBe(2);
    });

    _test("execution of bulk_12: call (instance 12)", () => {
        let _call = module.getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = module.invoke(_call, 4);
        expect(_call_result).toBe(0);
    });

    _test("execution of bulk_12: copy (instance 12)", () => {
        let _copy = module.getExport("copy");
        expect(_copy).not.toBeUndefined();
        module.invoke(_copy, 0, 0);
    });

    _test("execution of bulk_12: copy (instance 13)", () => {
        let _copy = module.getExport("copy");
        expect(_copy).not.toBeUndefined();
        module.invoke(_copy, 0, 0);
    });

    _test("execution of bulk_12: copy (instance 14)", () => {
        let _copy = module.getExport("copy");
        expect(_copy).not.toBeUndefined();
        module.invoke(_copy, 0, 0);
    });

    _test("execution of bulk_12: copy (instance 15)", () => {
        let _copy = module.getExport("copy");
        expect(_copy).not.toBeUndefined();
        module.invoke(_copy, 0, 0);
    });

    _test("execution of bulk_12: copy (instance 16)", () => {
        let _copy = module.getExport("copy");
        expect(_copy).not.toBeUndefined();
        expect(() => module.invoke(_copy, 11, 0, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of bulk_12: copy (instance 17)", () => {
        let _copy = module.getExport("copy");
        expect(_copy).not.toBeUndefined();
        expect(() => module.invoke(_copy, 0, 11, 0).toThrow(TypeError, "Execution trapped"));
    });
});
