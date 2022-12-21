let globalImportObject = {};
let namedModules = {};

describe("memory_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("memory_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("memory_2", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_2.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("memory_3", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_3.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("memory_4", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_4.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("memory_5", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_5.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("memory_6", () => {
    let _test = test;

    _test("execution of memory_6: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_7", () => {
    let _test = test;

    _test("execution of memory_7: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_8", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_8.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_8: memsize (instance 0)", () => {
        let _memsize = module.getExport("memsize");
        expect(_memsize).not.toBeUndefined();
        let _memsize_result = module.invoke(_memsize);
        expect(_memsize_result).toBe(0);
    });
});

describe("memory_9", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_9.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_9: memsize (instance 1)", () => {
        let _memsize = module.getExport("memsize");
        expect(_memsize).not.toBeUndefined();
        let _memsize_result = module.invoke(_memsize);
        expect(_memsize_result).toBe(0);
    });
});

describe("memory_10", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_10.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_10: memsize (instance 2)", () => {
        let _memsize = module.getExport("memsize");
        expect(_memsize).not.toBeUndefined();
        let _memsize_result = module.invoke(_memsize);
        expect(_memsize_result).toBe(1);
    });
});

describe("memory_11", () => {
    let _test = test;

    _test("execution of memory_11: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_12", () => {
    let _test = test;

    _test("execution of memory_12: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_13", () => {
    let _test = test;

    _test("execution of memory_13: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_14", () => {
    let _test = test;

    _test("execution of memory_14: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_15", () => {
    let _test = test;

    _test("execution of memory_15: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_16", () => {
    let _test = test;

    _test("execution of memory_16: _inline_test_7 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_17", () => {
    let _test = test;

    _test("execution of memory_17: _inline_test_8 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_18", () => {
    let _test = test;

    _test("execution of memory_18: _inline_test_9 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_19", () => {
    let _test = test;

    _test("execution of memory_19: _inline_test_10 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_20", () => {
    let _test = test;

    _test("execution of memory_20: _inline_test_11 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_21", () => {
    let _test = test;

    _test("execution of memory_21: _inline_test_12 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_22", () => {
    let _test = test;

    _test("execution of memory_22: _inline_test_13 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_23", () => {
    let _test = test;

    _test("execution of memory_23: _inline_test_14 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_24", () => {
    let _test = test;

    _test("execution of memory_24: _inline_test_15 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_25", () => {
    let _test = test;

    _test("execution of memory_25: _inline_test_16 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_26", () => {
    let _test = test;

    _test("execution of memory_26: _inline_test_17 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_27", () => {
    let _test = test;

    _test("execution of memory_27: _inline_test_18 (instance 0)", () => {});
});

describe("memory_28", () => {
    let _test = test;

    _test("execution of memory_28: _inline_test_19 (instance 0)", () => {});
});

describe("memory_29", () => {
    let _test = test;

    _test("execution of memory_29: _inline_test_20 (instance 0)", () => {});
});

describe("memory_30", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_30.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_30: data (instance 0)", () => {
        let _data = module.getExport("data");
        expect(_data).not.toBeUndefined();
        let _data_result = module.invoke(_data);
        expect(_data_result).toBe(1);
    });

    _test("execution of memory_30: cast (instance 0)", () => {
        let _cast = module.getExport("cast");
        expect(_cast).not.toBeUndefined();
        let _cast_result = module.invoke(_cast);
        expect(_cast_result).toBe(42.0);
    });

    _test("execution of memory_30: i32_load8_s (instance 0)", () => {
        let _i32_load8_s = module.getExport("i32_load8_s");
        expect(_i32_load8_s).not.toBeUndefined();
        let _i32_load8_s_result = module.invoke(_i32_load8_s, -1);
        expect(_i32_load8_s_result).toBe(-1);
    });

    _test("execution of memory_30: i32_load8_u (instance 0)", () => {
        let _i32_load8_u = module.getExport("i32_load8_u");
        expect(_i32_load8_u).not.toBeUndefined();
        let _i32_load8_u_result = module.invoke(_i32_load8_u, -1);
        expect(_i32_load8_u_result).toBe(255);
    });

    _test("execution of memory_30: i32_load16_s (instance 0)", () => {
        let _i32_load16_s = module.getExport("i32_load16_s");
        expect(_i32_load16_s).not.toBeUndefined();
        let _i32_load16_s_result = module.invoke(_i32_load16_s, -1);
        expect(_i32_load16_s_result).toBe(-1);
    });

    _test("execution of memory_30: i32_load16_u (instance 0)", () => {
        let _i32_load16_u = module.getExport("i32_load16_u");
        expect(_i32_load16_u).not.toBeUndefined();
        let _i32_load16_u_result = module.invoke(_i32_load16_u, -1);
        expect(_i32_load16_u_result).toBe(65535);
    });

    _test("execution of memory_30: i32_load8_s (instance 1)", () => {
        let _i32_load8_s = module.getExport("i32_load8_s");
        expect(_i32_load8_s).not.toBeUndefined();
        let _i32_load8_s_result = module.invoke(_i32_load8_s, 100);
        expect(_i32_load8_s_result).toBe(100);
    });

    _test("execution of memory_30: i32_load8_u (instance 1)", () => {
        let _i32_load8_u = module.getExport("i32_load8_u");
        expect(_i32_load8_u).not.toBeUndefined();
        let _i32_load8_u_result = module.invoke(_i32_load8_u, 200);
        expect(_i32_load8_u_result).toBe(200);
    });

    _test("execution of memory_30: i32_load16_s (instance 1)", () => {
        let _i32_load16_s = module.getExport("i32_load16_s");
        expect(_i32_load16_s).not.toBeUndefined();
        let _i32_load16_s_result = module.invoke(_i32_load16_s, 20000);
        expect(_i32_load16_s_result).toBe(20000);
    });

    _test("execution of memory_30: i32_load16_u (instance 1)", () => {
        let _i32_load16_u = module.getExport("i32_load16_u");
        expect(_i32_load16_u).not.toBeUndefined();
        let _i32_load16_u_result = module.invoke(_i32_load16_u, 40000);
        expect(_i32_load16_u_result).toBe(40000);
    });

    _test("execution of memory_30: i32_load8_s (instance 2)", () => {
        let _i32_load8_s = module.getExport("i32_load8_s");
        expect(_i32_load8_s).not.toBeUndefined();
        let _i32_load8_s_result = module.invoke(_i32_load8_s, -19110589);
        expect(_i32_load8_s_result).toBe(67);
    });

    _test("execution of memory_30: i32_load8_s (instance 3)", () => {
        let _i32_load8_s = module.getExport("i32_load8_s");
        expect(_i32_load8_s).not.toBeUndefined();
        let _i32_load8_s_result = module.invoke(_i32_load8_s, 878104047);
        expect(_i32_load8_s_result).toBe(-17);
    });

    _test("execution of memory_30: i32_load8_u (instance 2)", () => {
        let _i32_load8_u = module.getExport("i32_load8_u");
        expect(_i32_load8_u).not.toBeUndefined();
        let _i32_load8_u_result = module.invoke(_i32_load8_u, -19110589);
        expect(_i32_load8_u_result).toBe(67);
    });

    _test("execution of memory_30: i32_load8_u (instance 3)", () => {
        let _i32_load8_u = module.getExport("i32_load8_u");
        expect(_i32_load8_u).not.toBeUndefined();
        let _i32_load8_u_result = module.invoke(_i32_load8_u, 878104047);
        expect(_i32_load8_u_result).toBe(239);
    });

    _test("execution of memory_30: i32_load16_s (instance 2)", () => {
        let _i32_load16_s = module.getExport("i32_load16_s");
        expect(_i32_load16_s).not.toBeUndefined();
        let _i32_load16_s_result = module.invoke(_i32_load16_s, -19110589);
        expect(_i32_load16_s_result).toBe(25923);
    });

    _test("execution of memory_30: i32_load16_s (instance 3)", () => {
        let _i32_load16_s = module.getExport("i32_load16_s");
        expect(_i32_load16_s).not.toBeUndefined();
        let _i32_load16_s_result = module.invoke(_i32_load16_s, 878104047);
        expect(_i32_load16_s_result).toBe(-12817);
    });

    _test("execution of memory_30: i32_load16_u (instance 2)", () => {
        let _i32_load16_u = module.getExport("i32_load16_u");
        expect(_i32_load16_u).not.toBeUndefined();
        let _i32_load16_u_result = module.invoke(_i32_load16_u, -19110589);
        expect(_i32_load16_u_result).toBe(25923);
    });

    _test("execution of memory_30: i32_load16_u (instance 3)", () => {
        let _i32_load16_u = module.getExport("i32_load16_u");
        expect(_i32_load16_u).not.toBeUndefined();
        let _i32_load16_u_result = module.invoke(_i32_load16_u, 878104047);
        expect(_i32_load16_u_result).toBe(52719);
    });

    _test("execution of memory_30: i64_load8_s (instance 0)", () => {
        let _i64_load8_s = module.getExport("i64_load8_s");
        expect(_i64_load8_s).not.toBeUndefined();
        let _i64_load8_s_result = module.invoke(_i64_load8_s, -1n);
        expect(_i64_load8_s_result).toBe(-1n);
    });

    _test("execution of memory_30: i64_load8_u (instance 0)", () => {
        let _i64_load8_u = module.getExport("i64_load8_u");
        expect(_i64_load8_u).not.toBeUndefined();
        let _i64_load8_u_result = module.invoke(_i64_load8_u, -1n);
        expect(_i64_load8_u_result).toBe(255n);
    });

    _test("execution of memory_30: i64_load16_s (instance 0)", () => {
        let _i64_load16_s = module.getExport("i64_load16_s");
        expect(_i64_load16_s).not.toBeUndefined();
        let _i64_load16_s_result = module.invoke(_i64_load16_s, -1n);
        expect(_i64_load16_s_result).toBe(-1n);
    });

    _test("execution of memory_30: i64_load16_u (instance 0)", () => {
        let _i64_load16_u = module.getExport("i64_load16_u");
        expect(_i64_load16_u).not.toBeUndefined();
        let _i64_load16_u_result = module.invoke(_i64_load16_u, -1n);
        expect(_i64_load16_u_result).toBe(65535n);
    });

    _test("execution of memory_30: i64_load32_s (instance 0)", () => {
        let _i64_load32_s = module.getExport("i64_load32_s");
        expect(_i64_load32_s).not.toBeUndefined();
        let _i64_load32_s_result = module.invoke(_i64_load32_s, -1n);
        expect(_i64_load32_s_result).toBe(-1n);
    });

    _test("execution of memory_30: i64_load32_u (instance 0)", () => {
        let _i64_load32_u = module.getExport("i64_load32_u");
        expect(_i64_load32_u).not.toBeUndefined();
        let _i64_load32_u_result = module.invoke(_i64_load32_u, -1n);
        expect(_i64_load32_u_result).toBe(4294967295n);
    });

    _test("execution of memory_30: i64_load8_s (instance 1)", () => {
        let _i64_load8_s = module.getExport("i64_load8_s");
        expect(_i64_load8_s).not.toBeUndefined();
        let _i64_load8_s_result = module.invoke(_i64_load8_s, 100n);
        expect(_i64_load8_s_result).toBe(100n);
    });

    _test("execution of memory_30: i64_load8_u (instance 1)", () => {
        let _i64_load8_u = module.getExport("i64_load8_u");
        expect(_i64_load8_u).not.toBeUndefined();
        let _i64_load8_u_result = module.invoke(_i64_load8_u, 200n);
        expect(_i64_load8_u_result).toBe(200n);
    });

    _test("execution of memory_30: i64_load16_s (instance 1)", () => {
        let _i64_load16_s = module.getExport("i64_load16_s");
        expect(_i64_load16_s).not.toBeUndefined();
        let _i64_load16_s_result = module.invoke(_i64_load16_s, 20000n);
        expect(_i64_load16_s_result).toBe(20000n);
    });

    _test("execution of memory_30: i64_load16_u (instance 1)", () => {
        let _i64_load16_u = module.getExport("i64_load16_u");
        expect(_i64_load16_u).not.toBeUndefined();
        let _i64_load16_u_result = module.invoke(_i64_load16_u, 40000n);
        expect(_i64_load16_u_result).toBe(40000n);
    });

    _test("execution of memory_30: i64_load32_s (instance 1)", () => {
        let _i64_load32_s = module.getExport("i64_load32_s");
        expect(_i64_load32_s).not.toBeUndefined();
        let _i64_load32_s_result = module.invoke(_i64_load32_s, 20000n);
        expect(_i64_load32_s_result).toBe(20000n);
    });

    _test("execution of memory_30: i64_load32_u (instance 1)", () => {
        let _i64_load32_u = module.getExport("i64_load32_u");
        expect(_i64_load32_u).not.toBeUndefined();
        let _i64_load32_u_result = module.invoke(_i64_load32_u, 40000n);
        expect(_i64_load32_u_result).toBe(40000n);
    });

    _test("execution of memory_30: i64_load8_s (instance 2)", () => {
        let _i64_load8_s = module.getExport("i64_load8_s");
        expect(_i64_load8_s).not.toBeUndefined();
        let _i64_load8_s_result = module.invoke(_i64_load8_s, -81985529755441853n);
        expect(_i64_load8_s_result).toBe(67n);
    });

    _test("execution of memory_30: i64_load8_s (instance 3)", () => {
        let _i64_load8_s = module.getExport("i64_load8_s");
        expect(_i64_load8_s).not.toBeUndefined();
        let _i64_load8_s_result = module.invoke(_i64_load8_s, 3771275841602506223n);
        expect(_i64_load8_s_result).toBe(-17n);
    });

    _test("execution of memory_30: i64_load8_u (instance 2)", () => {
        let _i64_load8_u = module.getExport("i64_load8_u");
        expect(_i64_load8_u).not.toBeUndefined();
        let _i64_load8_u_result = module.invoke(_i64_load8_u, -81985529755441853n);
        expect(_i64_load8_u_result).toBe(67n);
    });

    _test("execution of memory_30: i64_load8_u (instance 3)", () => {
        let _i64_load8_u = module.getExport("i64_load8_u");
        expect(_i64_load8_u).not.toBeUndefined();
        let _i64_load8_u_result = module.invoke(_i64_load8_u, 3771275841602506223n);
        expect(_i64_load8_u_result).toBe(239n);
    });

    _test("execution of memory_30: i64_load16_s (instance 2)", () => {
        let _i64_load16_s = module.getExport("i64_load16_s");
        expect(_i64_load16_s).not.toBeUndefined();
        let _i64_load16_s_result = module.invoke(_i64_load16_s, -81985529755441853n);
        expect(_i64_load16_s_result).toBe(25923n);
    });

    _test("execution of memory_30: i64_load16_s (instance 3)", () => {
        let _i64_load16_s = module.getExport("i64_load16_s");
        expect(_i64_load16_s).not.toBeUndefined();
        let _i64_load16_s_result = module.invoke(_i64_load16_s, 3771275841602506223n);
        expect(_i64_load16_s_result).toBe(-12817n);
    });

    _test("execution of memory_30: i64_load16_u (instance 2)", () => {
        let _i64_load16_u = module.getExport("i64_load16_u");
        expect(_i64_load16_u).not.toBeUndefined();
        let _i64_load16_u_result = module.invoke(_i64_load16_u, -81985529755441853n);
        expect(_i64_load16_u_result).toBe(25923n);
    });

    _test("execution of memory_30: i64_load16_u (instance 3)", () => {
        let _i64_load16_u = module.getExport("i64_load16_u");
        expect(_i64_load16_u).not.toBeUndefined();
        let _i64_load16_u_result = module.invoke(_i64_load16_u, 3771275841602506223n);
        expect(_i64_load16_u_result).toBe(52719n);
    });

    _test("execution of memory_30: i64_load32_s (instance 2)", () => {
        let _i64_load32_s = module.getExport("i64_load32_s");
        expect(_i64_load32_s).not.toBeUndefined();
        let _i64_load32_s_result = module.invoke(_i64_load32_s, -81985529755441853n);
        expect(_i64_load32_s_result).toBe(1446274371n);
    });

    _test("execution of memory_30: i64_load32_s (instance 3)", () => {
        let _i64_load32_s = module.getExport("i64_load32_s");
        expect(_i64_load32_s).not.toBeUndefined();
        let _i64_load32_s_result = module.invoke(_i64_load32_s, 3771275841602506223n);
        expect(_i64_load32_s_result).toBe(-1732588049n);
    });

    _test("execution of memory_30: i64_load32_u (instance 2)", () => {
        let _i64_load32_u = module.getExport("i64_load32_u");
        expect(_i64_load32_u).not.toBeUndefined();
        let _i64_load32_u_result = module.invoke(_i64_load32_u, -81985529755441853n);
        expect(_i64_load32_u_result).toBe(1446274371n);
    });

    _test("execution of memory_30: i64_load32_u (instance 3)", () => {
        let _i64_load32_u = module.getExport("i64_load32_u");
        expect(_i64_load32_u).not.toBeUndefined();
        let _i64_load32_u_result = module.invoke(_i64_load32_u, 3771275841602506223n);
        expect(_i64_load32_u_result).toBe(2562379247n);
    });
});

describe("memory_31", () => {
    let _test = test;

    _test("execution of memory_31: _inline_test_21 (instance 0)", () => {});
});

describe("memory_32", () => {
    let _test = test;

    _test("execution of memory_32: _inline_test_22 (instance 0)", () => {});
});

describe("memory_33", () => {
    let _test = test;

    _test("execution of memory_33: _inline_test_23 (instance 0)", () => {});
});
