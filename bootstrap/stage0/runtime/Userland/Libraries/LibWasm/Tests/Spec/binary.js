let globalImportObject = {};
let namedModules = {};

describe("binary_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_2", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_2.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules["$M1"] = module;
});

describe("binary_3", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_3.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules["$M2"] = module;
});

describe("binary_4", () => {
    let _test = test;

    _test("execution of binary_4: _inline_test_0 (instance 0)", () => {});
});

describe("binary_5", () => {
    let _test = test;

    _test("execution of binary_5: _inline_test_1 (instance 0)", () => {});
});

describe("binary_6", () => {
    let _test = test;

    _test("execution of binary_6: _inline_test_2 (instance 0)", () => {});
});

describe("binary_7", () => {
    let _test = test;

    _test("execution of binary_7: _inline_test_3 (instance 0)", () => {});
});

describe("binary_8", () => {
    let _test = test;

    _test("execution of binary_8: _inline_test_4 (instance 0)", () => {});
});

describe("binary_9", () => {
    let _test = test;

    _test("execution of binary_9: _inline_test_5 (instance 0)", () => {});
});

describe("binary_10", () => {
    let _test = test;

    _test("execution of binary_10: _inline_test_6 (instance 0)", () => {});
});

describe("binary_11", () => {
    let _test = test;

    _test("execution of binary_11: _inline_test_7 (instance 0)", () => {});
});

describe("binary_12", () => {
    let _test = test;

    _test("execution of binary_12: _inline_test_8 (instance 0)", () => {});
});

describe("binary_13", () => {
    let _test = test;

    _test("execution of binary_13: _inline_test_9 (instance 0)", () => {});
});

describe("binary_14", () => {
    let _test = test;

    _test("execution of binary_14: _inline_test_10 (instance 0)", () => {});
});

describe("binary_15", () => {
    let _test = test;

    _test("execution of binary_15: _inline_test_11 (instance 0)", () => {});
});

describe("binary_16", () => {
    let _test = test;

    _test("execution of binary_16: _inline_test_12 (instance 0)", () => {});
});

describe("binary_17", () => {
    let _test = test;

    _test("execution of binary_17: _inline_test_13 (instance 0)", () => {});
});

describe("binary_18", () => {
    let _test = test;

    _test("execution of binary_18: _inline_test_14 (instance 0)", () => {});
});

describe("binary_19", () => {
    let _test = test;

    _test("execution of binary_19: _inline_test_15 (instance 0)", () => {});
});

describe("binary_20", () => {
    let _test = test;

    _test("execution of binary_20: _inline_test_16 (instance 0)", () => {});
});

describe("binary_21", () => {
    let _test = test;

    _test("execution of binary_21: _inline_test_17 (instance 0)", () => {});
});

describe("binary_22", () => {
    let _test = test;

    _test("execution of binary_22: _inline_test_18 (instance 0)", () => {});
});

describe("binary_23", () => {
    let _test = test;

    _test("execution of binary_23: _inline_test_19 (instance 0)", () => {});
});

describe("binary_24", () => {
    let _test = test;

    _test("execution of binary_24: _inline_test_20 (instance 0)", () => {});
});

describe("binary_25", () => {
    let _test = test;

    _test("execution of binary_25: _inline_test_21 (instance 0)", () => {});
});

describe("binary_26", () => {
    let _test = test;

    _test("execution of binary_26: _inline_test_22 (instance 0)", () => {});
});

describe("binary_27", () => {
    let _test = test;

    _test("execution of binary_27: _inline_test_23 (instance 0)", () => {});
});

describe("binary_28", () => {
    let _test = test;

    _test("execution of binary_28: _inline_test_24 (instance 0)", () => {});
});

describe("binary_29", () => {
    let _test = test;

    _test("execution of binary_29: _inline_test_25 (instance 0)", () => {});
});

describe("binary_30", () => {
    let _test = test;

    _test("execution of binary_30: _inline_test_26 (instance 0)", () => {});
});

describe("binary_31", () => {
    let _test = test;

    _test("execution of binary_31: _inline_test_27 (instance 0)", () => {});
});

describe("binary_32", () => {
    let _test = test;

    _test("execution of binary_32: _inline_test_28 (instance 0)", () => {});
});

describe("binary_33", () => {
    let _test = test;

    _test("execution of binary_33: _inline_test_29 (instance 0)", () => {});
});

describe("binary_34", () => {
    let _test = test;

    _test("execution of binary_34: _inline_test_30 (instance 0)", () => {});
});

describe("binary_35", () => {
    let _test = test;

    _test("execution of binary_35: _inline_test_31 (instance 0)", () => {});
});

describe("binary_36", () => {
    let _test = test;

    _test("execution of binary_36: _inline_test_32 (instance 0)", () => {});
});

describe("binary_37", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_37.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_38", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_38.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_39", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_39.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_40", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_40.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_41", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_41.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_42", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_42.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_43", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_43.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_44", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_44.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_45", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_45.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_46", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_46.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_47", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_47.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_48", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_48.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_49", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_49.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_50", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_50.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_51", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_51.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_52", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_52.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_53", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_53.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_54", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_54.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_55", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_55.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_56", () => {
    let _test = test;

    _test("execution of binary_56: _inline_test_33 (instance 0)", () => {});
});

describe("binary_57", () => {
    let _test = test;

    _test("execution of binary_57: _inline_test_34 (instance 0)", () => {});
});

describe("binary_58", () => {
    let _test = test;

    _test("execution of binary_58: _inline_test_35 (instance 0)", () => {});
});

describe("binary_59", () => {
    let _test = test;

    _test("execution of binary_59: _inline_test_36 (instance 0)", () => {});
});

describe("binary_60", () => {
    let _test = test;

    _test("execution of binary_60: _inline_test_37 (instance 0)", () => {});
});

describe("binary_61", () => {
    let _test = test;

    _test("execution of binary_61: _inline_test_38 (instance 0)", () => {});
});

describe("binary_62", () => {
    let _test = test;

    _test("execution of binary_62: _inline_test_39 (instance 0)", () => {});
});

describe("binary_63", () => {
    let _test = test;

    _test("execution of binary_63: _inline_test_40 (instance 0)", () => {});
});

describe("binary_64", () => {
    let _test = test;

    _test("execution of binary_64: _inline_test_41 (instance 0)", () => {});
});

describe("binary_65", () => {
    let _test = test;

    _test("execution of binary_65: _inline_test_42 (instance 0)", () => {});
});

describe("binary_66", () => {
    let _test = test;

    _test("execution of binary_66: _inline_test_43 (instance 0)", () => {});
});

describe("binary_67", () => {
    let _test = test;

    _test("execution of binary_67: _inline_test_44 (instance 0)", () => {});
});

describe("binary_68", () => {
    let _test = test;

    _test("execution of binary_68: _inline_test_45 (instance 0)", () => {});
});

describe("binary_69", () => {
    let _test = test;

    _test("execution of binary_69: _inline_test_46 (instance 0)", () => {});
});

describe("binary_70", () => {
    let _test = test;

    _test("execution of binary_70: _inline_test_47 (instance 0)", () => {});
});

describe("binary_71", () => {
    let _test = test;

    _test("execution of binary_71: _inline_test_48 (instance 0)", () => {});
});

describe("binary_72", () => {
    let _test = test;

    _test("execution of binary_72: _inline_test_49 (instance 0)", () => {});
});

describe("binary_73", () => {
    let _test = test;

    _test("execution of binary_73: _inline_test_50 (instance 0)", () => {});
});

describe("binary_74", () => {
    let _test = test;

    _test("execution of binary_74: _inline_test_51 (instance 0)", () => {});
});

describe("binary_75", () => {
    let _test = test;

    _test("execution of binary_75: _inline_test_52 (instance 0)", () => {});
});

describe("binary_76", () => {
    let _test = test;

    _test("execution of binary_76: _inline_test_53 (instance 0)", () => {});
});

describe("binary_77", () => {
    let _test = test;

    _test("execution of binary_77: _inline_test_54 (instance 0)", () => {});
});

describe("binary_78", () => {
    let _test = test;

    _test("execution of binary_78: _inline_test_55 (instance 0)", () => {});
});

describe("binary_79", () => {
    let _test = test;

    _test("execution of binary_79: _inline_test_56 (instance 0)", () => {});
});

describe("binary_80", () => {
    let _test = test;

    _test("execution of binary_80: _inline_test_57 (instance 0)", () => {});
});

describe("binary_81", () => {
    let _test = test;

    _test("execution of binary_81: _inline_test_58 (instance 0)", () => {});
});

describe("binary_82", () => {
    let _test = test;

    _test("execution of binary_82: _inline_test_59 (instance 0)", () => {});
});

describe("binary_83", () => {
    let _test = test;

    _test("execution of binary_83: _inline_test_60 (instance 0)", () => {});
});

describe("binary_84", () => {
    let _test = test;

    _test("execution of binary_84: _inline_test_61 (instance 0)", () => {});
});

describe("binary_85", () => {
    let _test = test;

    _test("execution of binary_85: _inline_test_62 (instance 0)", () => {});
});

describe("binary_86", () => {
    let _test = test;

    _test("execution of binary_86: _inline_test_63 (instance 0)", () => {});
});

describe("binary_87", () => {
    let _test = test;

    _test("execution of binary_87: _inline_test_64 (instance 0)", () => {});
});

describe("binary_88", () => {
    let _test = test;

    _test("execution of binary_88: _inline_test_65 (instance 0)", () => {});
});

describe("binary_89", () => {
    let _test = test;

    _test("execution of binary_89: _inline_test_66 (instance 0)", () => {});
});

describe("binary_90", () => {
    let _test = test;

    _test("execution of binary_90: _inline_test_67 (instance 0)", () => {});
});

describe("binary_91", () => {
    let _test = test;

    _test("execution of binary_91: _inline_test_68 (instance 0)", () => {});
});

describe("binary_92", () => {
    let _test = test;

    _test("execution of binary_92: _inline_test_69 (instance 0)", () => {});
});

describe("binary_93", () => {
    let _test = test;

    _test("execution of binary_93: _inline_test_70 (instance 0)", () => {});
});

describe("binary_94", () => {
    let _test = test;

    _test("execution of binary_94: _inline_test_71 (instance 0)", () => {});
});

describe("binary_95", () => {
    let _test = test;

    _test("execution of binary_95: _inline_test_72 (instance 0)", () => {});
});

describe("binary_96", () => {
    let _test = test;

    _test("execution of binary_96: _inline_test_73 (instance 0)", () => {});
});

describe("binary_97", () => {
    let _test = test;

    _test("execution of binary_97: _inline_test_74 (instance 0)", () => {});
});

describe("binary_98", () => {
    let _test = test;

    _test("execution of binary_98: _inline_test_75 (instance 0)", () => {});
});

describe("binary_99", () => {
    let _test = test;

    _test("execution of binary_99: _inline_test_76 (instance 0)", () => {});
});

describe("binary_100", () => {
    let _test = test;

    _test("execution of binary_100: _inline_test_77 (instance 0)", () => {});
});

describe("binary_101", () => {
    let _test = test;

    _test("execution of binary_101: _inline_test_78 (instance 0)", () => {});
});

describe("binary_102", () => {
    let _test = test;

    _test("execution of binary_102: _inline_test_79 (instance 0)", () => {});
});

describe("binary_103", () => {
    let _test = test;

    _test("execution of binary_103: _inline_test_80 (instance 0)", () => {});
});

describe("binary_104", () => {
    let _test = test;

    _test("execution of binary_104: _inline_test_81 (instance 0)", () => {});
});

describe("binary_105", () => {
    let _test = test;

    _test("execution of binary_105: _inline_test_82 (instance 0)", () => {});
});

describe("binary_106", () => {
    let _test = test;

    _test("execution of binary_106: _inline_test_83 (instance 0)", () => {});
});

describe("binary_107", () => {
    let _test = test;

    _test("execution of binary_107: _inline_test_84 (instance 0)", () => {});
});

describe("binary_108", () => {
    let _test = test;

    _test("execution of binary_108: _inline_test_85 (instance 0)", () => {});
});

describe("binary_109", () => {
    let _test = test;

    _test("execution of binary_109: _inline_test_86 (instance 0)", () => {});
});

describe("binary_110", () => {
    let _test = test;

    _test("execution of binary_110: _inline_test_87 (instance 0)", () => {});
});

describe("binary_111", () => {
    let _test = test;

    _test("execution of binary_111: _inline_test_88 (instance 0)", () => {});
});

describe("binary_112", () => {
    let _test = test;

    _test("execution of binary_112: _inline_test_89 (instance 0)", () => {});
});

describe("binary_113", () => {
    let _test = test;

    _test("execution of binary_113: _inline_test_90 (instance 0)", () => {});
});

describe("binary_114", () => {
    let _test = test;

    _test("execution of binary_114: _inline_test_91 (instance 0)", () => {});
});

describe("binary_115", () => {
    let _test = test;

    _test("execution of binary_115: _inline_test_92 (instance 0)", () => {});
});

describe("binary_116", () => {
    let _test = test;

    _test("execution of binary_116: _inline_test_93 (instance 0)", () => {});
});

describe("binary_117", () => {
    let _test = test;

    _test("execution of binary_117: _inline_test_94 (instance 0)", () => {});
});

describe("binary_118", () => {
    let _test = test;

    _test("execution of binary_118: _inline_test_95 (instance 0)", () => {});
});

describe("binary_119", () => {
    let _test = test;

    _test("execution of binary_119: _inline_test_96 (instance 0)", () => {});
});

describe("binary_120", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_120.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_121", () => {
    let _test = test;

    _test("execution of binary_121: _inline_test_97 (instance 0)", () => {});
});

describe("binary_122", () => {
    let _test = test;

    _test("execution of binary_122: _inline_test_98 (instance 0)", () => {});
});

describe("binary_123", () => {
    let _test = test;

    _test("execution of binary_123: _inline_test_99 (instance 0)", () => {});
});

describe("binary_124", () => {
    let _test = test;

    _test("execution of binary_124: _inline_test_100 (instance 0)", () => {});
});

describe("binary_125", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_125.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_126", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_126.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_127", () => {
    let _test = test;

    _test("execution of binary_127: _inline_test_101 (instance 0)", () => {});
});

describe("binary_128", () => {
    let _test = test;

    _test("execution of binary_128: _inline_test_102 (instance 0)", () => {});
});

describe("binary_129", () => {
    let _test = test;

    _test("execution of binary_129: _inline_test_103 (instance 0)", () => {});
});

describe("binary_130", () => {
    let _test = test;

    _test("execution of binary_130: _inline_test_104 (instance 0)", () => {});
});

describe("binary_131", () => {
    let _test = test;

    _test("execution of binary_131: _inline_test_105 (instance 0)", () => {});
});

describe("binary_132", () => {
    let _test = test;

    _test("execution of binary_132: _inline_test_106 (instance 0)", () => {});
});

describe("binary_133", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_133.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_134", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_134.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_135", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_135.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_136", () => {
    let _test = test;

    _test("execution of binary_136: _inline_test_107 (instance 0)", () => {});
});

describe("binary_137", () => {
    let _test = test;

    _test("execution of binary_137: _inline_test_108 (instance 0)", () => {});
});

describe("binary_138", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_138.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_139", () => {
    let _test = test;

    _test("execution of binary_139: _inline_test_109 (instance 0)", () => {});
});

describe("binary_140", () => {
    let _test = test;

    _test("execution of binary_140: _inline_test_110 (instance 0)", () => {});
});

describe("binary_141", () => {
    let _test = test;

    _test("execution of binary_141: _inline_test_111 (instance 0)", () => {});
});

describe("binary_142", () => {
    let _test = test;

    _test("execution of binary_142: _inline_test_112 (instance 0)", () => {});
});

describe("binary_143", () => {
    let _test = test;

    _test("execution of binary_143: _inline_test_113 (instance 0)", () => {});
});

describe("binary_144", () => {
    let _test = test;

    _test("execution of binary_144: _inline_test_114 (instance 0)", () => {});
});

describe("binary_145", () => {
    let _test = test;

    _test("execution of binary_145: _inline_test_115 (instance 0)", () => {});
});

describe("binary_146", () => {
    let _test = test;

    _test("execution of binary_146: _inline_test_116 (instance 0)", () => {});
});

describe("binary_147", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_147.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_148", () => {
    let _test = test;

    _test("execution of binary_148: _inline_test_117 (instance 0)", () => {});
});

describe("binary_149", () => {
    let _test = test;

    _test("execution of binary_149: _inline_test_118 (instance 0)", () => {});
});

describe("binary_150", () => {
    let _test = test;

    _test("execution of binary_150: _inline_test_119 (instance 0)", () => {});
});

describe("binary_151", () => {
    let _test = test;

    _test("execution of binary_151: _inline_test_120 (instance 0)", () => {});
});

describe("binary_152", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_152.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_153", () => {
    let _test = test;

    _test("execution of binary_153: _inline_test_121 (instance 0)", () => {});
});

describe("binary_154", () => {
    let _test = test;

    _test("execution of binary_154: _inline_test_122 (instance 0)", () => {});
});

describe("binary_155", () => {
    let _test = test;

    _test("execution of binary_155: _inline_test_123 (instance 0)", () => {});
});

describe("binary_156", () => {
    let _test = test;

    _test("execution of binary_156: _inline_test_124 (instance 0)", () => {});
});

describe("binary_157", () => {
    let _test = test;

    _test("execution of binary_157: _inline_test_125 (instance 0)", () => {});
});

describe("binary_158", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_158.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_159", () => {
    let _test = test;

    _test("execution of binary_159: _inline_test_126 (instance 0)", () => {});
});

describe("binary_160", () => {
    let _test = test;

    _test("execution of binary_160: _inline_test_127 (instance 0)", () => {});
});

describe("binary_161", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_161.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_162", () => {
    let _test = test;

    _test("execution of binary_162: _inline_test_128 (instance 0)", () => {});
});

describe("binary_163", () => {
    let _test = test;

    _test("execution of binary_163: _inline_test_129 (instance 0)", () => {});
});

describe("binary_164", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_164.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_165", () => {
    let _test = test;

    _test("execution of binary_165: _inline_test_130 (instance 0)", () => {});
});

describe("binary_166", () => {
    let _test = test;

    _test("execution of binary_166: _inline_test_131 (instance 0)", () => {});
});

describe("binary_167", () => {
    let _test = test;

    _test("execution of binary_167: _inline_test_132 (instance 0)", () => {});
});

describe("binary_168", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_168.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_169", () => {
    let _test = test;

    _test("execution of binary_169: _inline_test_133 (instance 0)", () => {});
});

describe("binary_170", () => {
    let _test = test;

    _test("execution of binary_170: _inline_test_134 (instance 0)", () => {});
});

describe("binary_171", () => {
    let _test = test;

    _test("execution of binary_171: _inline_test_135 (instance 0)", () => {});
});

describe("binary_172", () => {
    let _test = test;

    _test("execution of binary_172: _inline_test_136 (instance 0)", () => {});
});

describe("binary_173", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_173.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_174", () => {
    let _test = test;

    _test("execution of binary_174: _inline_test_137 (instance 0)", () => {});
});

describe("binary_175", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/binary_175.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("binary_176", () => {
    let _test = test;

    _test("execution of binary_176: _inline_test_138 (instance 0)", () => {});
});
