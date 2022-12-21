let globalImportObject = {};
let namedModules = {};

describe("memory_grow_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_grow_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_grow_0: size (instance 0)", () => {
        let _size = module.getExport("size");
        expect(_size).not.toBeUndefined();
        let _size_result = module.invoke(_size);
        expect(_size_result).toBe(0);
    });

    _test("execution of memory_grow_0: store_at_zero (instance 0)", () => {
        let _store_at_zero = module.getExport("store_at_zero");
        expect(_store_at_zero).not.toBeUndefined();
        expect(() => module.invoke(_store_at_zero).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_grow_0: load_at_zero (instance 0)", () => {
        let _load_at_zero = module.getExport("load_at_zero");
        expect(_load_at_zero).not.toBeUndefined();
        expect(() => module.invoke(_load_at_zero).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_grow_0: store_at_page_size (instance 0)", () => {
        let _store_at_page_size = module.getExport("store_at_page_size");
        expect(_store_at_page_size).not.toBeUndefined();
        expect(() => module.invoke(_store_at_page_size).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_grow_0: load_at_page_size (instance 0)", () => {
        let _load_at_page_size = module.getExport("load_at_page_size");
        expect(_load_at_page_size).not.toBeUndefined();
        expect(() => module.invoke(_load_at_page_size).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_grow_0: grow (instance 0)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 1);
        expect(_grow_result).toBe(0);
    });

    _test("execution of memory_grow_0: size (instance 1)", () => {
        let _size = module.getExport("size");
        expect(_size).not.toBeUndefined();
        let _size_result = module.invoke(_size);
        expect(_size_result).toBe(1);
    });

    _test("execution of memory_grow_0: load_at_zero (instance 1)", () => {
        let _load_at_zero = module.getExport("load_at_zero");
        expect(_load_at_zero).not.toBeUndefined();
        let _load_at_zero_result = module.invoke(_load_at_zero);
        expect(_load_at_zero_result).toBe(0);
    });

    _test("execution of memory_grow_0: store_at_zero (instance 1)", () => {
        let _store_at_zero = module.getExport("store_at_zero");
        expect(_store_at_zero).not.toBeUndefined();
        let _store_at_zero_result = module.invoke(_store_at_zero);
    });

    _test("execution of memory_grow_0: load_at_zero (instance 2)", () => {
        let _load_at_zero = module.getExport("load_at_zero");
        expect(_load_at_zero).not.toBeUndefined();
        let _load_at_zero_result = module.invoke(_load_at_zero);
        expect(_load_at_zero_result).toBe(2);
    });

    _test("execution of memory_grow_0: store_at_page_size (instance 1)", () => {
        let _store_at_page_size = module.getExport("store_at_page_size");
        expect(_store_at_page_size).not.toBeUndefined();
        expect(() => module.invoke(_store_at_page_size).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_grow_0: load_at_page_size (instance 1)", () => {
        let _load_at_page_size = module.getExport("load_at_page_size");
        expect(_load_at_page_size).not.toBeUndefined();
        expect(() => module.invoke(_load_at_page_size).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_grow_0: grow (instance 1)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 4);
        expect(_grow_result).toBe(1);
    });

    _test("execution of memory_grow_0: size (instance 2)", () => {
        let _size = module.getExport("size");
        expect(_size).not.toBeUndefined();
        let _size_result = module.invoke(_size);
        expect(_size_result).toBe(5);
    });

    _test("execution of memory_grow_0: load_at_zero (instance 3)", () => {
        let _load_at_zero = module.getExport("load_at_zero");
        expect(_load_at_zero).not.toBeUndefined();
        let _load_at_zero_result = module.invoke(_load_at_zero);
        expect(_load_at_zero_result).toBe(2);
    });

    _test("execution of memory_grow_0: store_at_zero (instance 2)", () => {
        let _store_at_zero = module.getExport("store_at_zero");
        expect(_store_at_zero).not.toBeUndefined();
        let _store_at_zero_result = module.invoke(_store_at_zero);
    });

    _test("execution of memory_grow_0: load_at_zero (instance 4)", () => {
        let _load_at_zero = module.getExport("load_at_zero");
        expect(_load_at_zero).not.toBeUndefined();
        let _load_at_zero_result = module.invoke(_load_at_zero);
        expect(_load_at_zero_result).toBe(2);
    });

    _test("execution of memory_grow_0: load_at_page_size (instance 2)", () => {
        let _load_at_page_size = module.getExport("load_at_page_size");
        expect(_load_at_page_size).not.toBeUndefined();
        let _load_at_page_size_result = module.invoke(_load_at_page_size);
        expect(_load_at_page_size_result).toBe(0);
    });

    _test("execution of memory_grow_0: store_at_page_size (instance 2)", () => {
        let _store_at_page_size = module.getExport("store_at_page_size");
        expect(_store_at_page_size).not.toBeUndefined();
        let _store_at_page_size_result = module.invoke(_store_at_page_size);
    });

    _test("execution of memory_grow_0: load_at_page_size (instance 3)", () => {
        let _load_at_page_size = module.getExport("load_at_page_size");
        expect(_load_at_page_size).not.toBeUndefined();
        let _load_at_page_size_result = module.invoke(_load_at_page_size);
        expect(_load_at_page_size_result).toBe(3);
    });
});

describe("memory_grow_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_grow_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_grow_1: grow (instance 2)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 0);
        expect(_grow_result).toBe(0);
    });

    _test("execution of memory_grow_1: grow (instance 3)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 1);
        expect(_grow_result).toBe(0);
    });

    _test("execution of memory_grow_1: grow (instance 4)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 0);
        expect(_grow_result).toBe(1);
    });

    _test("execution of memory_grow_1: grow (instance 5)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 2);
        expect(_grow_result).toBe(1);
    });

    _test("execution of memory_grow_1: grow (instance 6)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 800);
        expect(_grow_result).toBe(3);
    });

    _test("execution of memory_grow_1: grow (instance 7)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 65536);
        expect(_grow_result).toBe(-1);
    });

    _test("execution of memory_grow_1: grow (instance 8)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 64736);
        expect(_grow_result).toBe(-1);
    });

    _test("execution of memory_grow_1: grow (instance 9)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 1);
        expect(_grow_result).toBe(803);
    });
});

describe("memory_grow_2", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_grow_2.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_grow_2: grow (instance 10)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 0);
        expect(_grow_result).toBe(0);
    });

    _test("execution of memory_grow_2: grow (instance 11)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 1);
        expect(_grow_result).toBe(0);
    });

    _test("execution of memory_grow_2: grow (instance 12)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 1);
        expect(_grow_result).toBe(1);
    });

    _test("execution of memory_grow_2: grow (instance 13)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 2);
        expect(_grow_result).toBe(2);
    });

    _test("execution of memory_grow_2: grow (instance 14)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 6);
        expect(_grow_result).toBe(4);
    });

    _test("execution of memory_grow_2: grow (instance 15)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 0);
        expect(_grow_result).toBe(10);
    });

    _test("execution of memory_grow_2: grow (instance 16)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 1);
        expect(_grow_result).toBe(-1);
    });

    _test("execution of memory_grow_2: grow (instance 17)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 65536);
        expect(_grow_result).toBe(-1);
    });
});

describe("memory_grow_3", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_grow_3.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_grow_3: check-memory-zero (instance 0)", () => {
        let _check_memory_zero = module.getExport("check-memory-zero");
        expect(_check_memory_zero).not.toBeUndefined();
        let _check_memory_zero_result = module.invoke(_check_memory_zero, 0, 65535);
        expect(_check_memory_zero_result).toBe(0);
    });

    _test("execution of memory_grow_3: grow (instance 18)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 1);
        expect(_grow_result).toBe(1);
    });

    _test("execution of memory_grow_3: check-memory-zero (instance 1)", () => {
        let _check_memory_zero = module.getExport("check-memory-zero");
        expect(_check_memory_zero).not.toBeUndefined();
        let _check_memory_zero_result = module.invoke(_check_memory_zero, 65536, 131071);
        expect(_check_memory_zero_result).toBe(0);
    });

    _test("execution of memory_grow_3: grow (instance 19)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 1);
        expect(_grow_result).toBe(2);
    });

    _test("execution of memory_grow_3: check-memory-zero (instance 2)", () => {
        let _check_memory_zero = module.getExport("check-memory-zero");
        expect(_check_memory_zero).not.toBeUndefined();
        let _check_memory_zero_result = module.invoke(_check_memory_zero, 131072, 196607);
        expect(_check_memory_zero_result).toBe(0);
    });

    _test("execution of memory_grow_3: grow (instance 20)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 1);
        expect(_grow_result).toBe(3);
    });

    _test("execution of memory_grow_3: check-memory-zero (instance 3)", () => {
        let _check_memory_zero = module.getExport("check-memory-zero");
        expect(_check_memory_zero).not.toBeUndefined();
        let _check_memory_zero_result = module.invoke(_check_memory_zero, 196608, 262143);
        expect(_check_memory_zero_result).toBe(0);
    });

    _test("execution of memory_grow_3: grow (instance 21)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 1);
        expect(_grow_result).toBe(4);
    });

    _test("execution of memory_grow_3: check-memory-zero (instance 4)", () => {
        let _check_memory_zero = module.getExport("check-memory-zero");
        expect(_check_memory_zero).not.toBeUndefined();
        let _check_memory_zero_result = module.invoke(_check_memory_zero, 262144, 327679);
        expect(_check_memory_zero_result).toBe(0);
    });

    _test("execution of memory_grow_3: grow (instance 22)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 1);
        expect(_grow_result).toBe(5);
    });

    _test("execution of memory_grow_3: check-memory-zero (instance 5)", () => {
        let _check_memory_zero = module.getExport("check-memory-zero");
        expect(_check_memory_zero).not.toBeUndefined();
        let _check_memory_zero_result = module.invoke(_check_memory_zero, 327680, 393215);
        expect(_check_memory_zero_result).toBe(0);
    });
});

describe("memory_grow_4", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_grow_4.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_grow_4: as-br-value (instance 0)", () => {
        let _as_br_value = module.getExport("as-br-value");
        expect(_as_br_value).not.toBeUndefined();
        let _as_br_value_result = module.invoke(_as_br_value);
        expect(_as_br_value_result).toBe(1);
    });

    _test("execution of memory_grow_4: as-br_if-cond (instance 0)", () => {
        let _as_br_if_cond = module.getExport("as-br_if-cond");
        expect(_as_br_if_cond).not.toBeUndefined();
        let _as_br_if_cond_result = module.invoke(_as_br_if_cond);
    });

    _test("execution of memory_grow_4: as-br_if-value (instance 0)", () => {
        let _as_br_if_value = module.getExport("as-br_if-value");
        expect(_as_br_if_value).not.toBeUndefined();
        let _as_br_if_value_result = module.invoke(_as_br_if_value);
        expect(_as_br_if_value_result).toBe(1);
    });

    _test("execution of memory_grow_4: as-br_if-value-cond (instance 0)", () => {
        let _as_br_if_value_cond = module.getExport("as-br_if-value-cond");
        expect(_as_br_if_value_cond).not.toBeUndefined();
        let _as_br_if_value_cond_result = module.invoke(_as_br_if_value_cond);
        expect(_as_br_if_value_cond_result).toBe(6);
    });

    _test("execution of memory_grow_4: as-br_table-index (instance 0)", () => {
        let _as_br_table_index = module.getExport("as-br_table-index");
        expect(_as_br_table_index).not.toBeUndefined();
        let _as_br_table_index_result = module.invoke(_as_br_table_index);
    });

    _test("execution of memory_grow_4: as-br_table-value (instance 0)", () => {
        let _as_br_table_value = module.getExport("as-br_table-value");
        expect(_as_br_table_value).not.toBeUndefined();
        let _as_br_table_value_result = module.invoke(_as_br_table_value);
        expect(_as_br_table_value_result).toBe(1);
    });

    _test("execution of memory_grow_4: as-br_table-value-index (instance 0)", () => {
        let _as_br_table_value_index = module.getExport("as-br_table-value-index");
        expect(_as_br_table_value_index).not.toBeUndefined();
        let _as_br_table_value_index_result = module.invoke(_as_br_table_value_index);
        expect(_as_br_table_value_index_result).toBe(6);
    });

    _test("execution of memory_grow_4: as-return-value (instance 0)", () => {
        let _as_return_value = module.getExport("as-return-value");
        expect(_as_return_value).not.toBeUndefined();
        let _as_return_value_result = module.invoke(_as_return_value);
        expect(_as_return_value_result).toBe(1);
    });

    _test("execution of memory_grow_4: as-if-cond (instance 0)", () => {
        let _as_if_cond = module.getExport("as-if-cond");
        expect(_as_if_cond).not.toBeUndefined();
        let _as_if_cond_result = module.invoke(_as_if_cond);
        expect(_as_if_cond_result).toBe(0);
    });

    _test("execution of memory_grow_4: as-if-then (instance 0)", () => {
        let _as_if_then = module.getExport("as-if-then");
        expect(_as_if_then).not.toBeUndefined();
        let _as_if_then_result = module.invoke(_as_if_then);
        expect(_as_if_then_result).toBe(1);
    });

    _test("execution of memory_grow_4: as-if-else (instance 0)", () => {
        let _as_if_else = module.getExport("as-if-else");
        expect(_as_if_else).not.toBeUndefined();
        let _as_if_else_result = module.invoke(_as_if_else);
        expect(_as_if_else_result).toBe(1);
    });

    _test("execution of memory_grow_4: as-select-first (instance 0)", () => {
        let _as_select_first = module.getExport("as-select-first");
        expect(_as_select_first).not.toBeUndefined();
        let _as_select_first_result = module.invoke(_as_select_first, 0, 1);
        expect(_as_select_first_result).toBe(1);
    });

    _test("execution of memory_grow_4: as-select-second (instance 0)", () => {
        let _as_select_second = module.getExport("as-select-second");
        expect(_as_select_second).not.toBeUndefined();
        let _as_select_second_result = module.invoke(_as_select_second, 0, 0);
        expect(_as_select_second_result).toBe(1);
    });

    _test("execution of memory_grow_4: as-select-cond (instance 0)", () => {
        let _as_select_cond = module.getExport("as-select-cond");
        expect(_as_select_cond).not.toBeUndefined();
        let _as_select_cond_result = module.invoke(_as_select_cond);
        expect(_as_select_cond_result).toBe(0);
    });

    _test("execution of memory_grow_4: as-call-first (instance 0)", () => {
        let _as_call_first = module.getExport("as-call-first");
        expect(_as_call_first).not.toBeUndefined();
        let _as_call_first_result = module.invoke(_as_call_first);
        expect(_as_call_first_result).toBe(-1);
    });

    _test("execution of memory_grow_4: as-call-mid (instance 0)", () => {
        let _as_call_mid = module.getExport("as-call-mid");
        expect(_as_call_mid).not.toBeUndefined();
        let _as_call_mid_result = module.invoke(_as_call_mid);
        expect(_as_call_mid_result).toBe(-1);
    });

    _test("execution of memory_grow_4: as-call-last (instance 0)", () => {
        let _as_call_last = module.getExport("as-call-last");
        expect(_as_call_last).not.toBeUndefined();
        let _as_call_last_result = module.invoke(_as_call_last);
        expect(_as_call_last_result).toBe(-1);
    });

    _test("execution of memory_grow_4: as-call_indirect-first (instance 0)", () => {
        let _as_call_indirect_first = module.getExport("as-call_indirect-first");
        expect(_as_call_indirect_first).not.toBeUndefined();
        let _as_call_indirect_first_result = module.invoke(_as_call_indirect_first);
        expect(_as_call_indirect_first_result).toBe(-1);
    });

    _test("execution of memory_grow_4: as-call_indirect-mid (instance 0)", () => {
        let _as_call_indirect_mid = module.getExport("as-call_indirect-mid");
        expect(_as_call_indirect_mid).not.toBeUndefined();
        let _as_call_indirect_mid_result = module.invoke(_as_call_indirect_mid);
        expect(_as_call_indirect_mid_result).toBe(-1);
    });

    _test("execution of memory_grow_4: as-call_indirect-last (instance 0)", () => {
        let _as_call_indirect_last = module.getExport("as-call_indirect-last");
        expect(_as_call_indirect_last).not.toBeUndefined();
        let _as_call_indirect_last_result = module.invoke(_as_call_indirect_last);
        expect(_as_call_indirect_last_result).toBe(-1);
    });

    _test("execution of memory_grow_4: as-call_indirect-index (instance 0)", () => {
        let _as_call_indirect_index = module.getExport("as-call_indirect-index");
        expect(_as_call_indirect_index).not.toBeUndefined();
        expect(() =>
            module.invoke(_as_call_indirect_index).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of memory_grow_4: as-local.set-value (instance 0)", () => {
        let _as_local_set_value = module.getExport("as-local.set-value");
        expect(_as_local_set_value).not.toBeUndefined();
        let _as_local_set_value_result = module.invoke(_as_local_set_value);
    });

    _test("execution of memory_grow_4: as-local.tee-value (instance 0)", () => {
        let _as_local_tee_value = module.getExport("as-local.tee-value");
        expect(_as_local_tee_value).not.toBeUndefined();
        let _as_local_tee_value_result = module.invoke(_as_local_tee_value);
        expect(_as_local_tee_value_result).toBe(1);
    });

    _test("execution of memory_grow_4: as-global.set-value (instance 0)", () => {
        let _as_global_set_value = module.getExport("as-global.set-value");
        expect(_as_global_set_value).not.toBeUndefined();
        let _as_global_set_value_result = module.invoke(_as_global_set_value);
    });

    _test("execution of memory_grow_4: as-load-address (instance 0)", () => {
        let _as_load_address = module.getExport("as-load-address");
        expect(_as_load_address).not.toBeUndefined();
        let _as_load_address_result = module.invoke(_as_load_address);
        expect(_as_load_address_result).toBe(0);
    });

    _test("execution of memory_grow_4: as-loadN-address (instance 0)", () => {
        let _as_loadN_address = module.getExport("as-loadN-address");
        expect(_as_loadN_address).not.toBeUndefined();
        let _as_loadN_address_result = module.invoke(_as_loadN_address);
        expect(_as_loadN_address_result).toBe(0);
    });

    _test("execution of memory_grow_4: as-store-address (instance 0)", () => {
        let _as_store_address = module.getExport("as-store-address");
        expect(_as_store_address).not.toBeUndefined();
        let _as_store_address_result = module.invoke(_as_store_address);
    });

    _test("execution of memory_grow_4: as-store-value (instance 0)", () => {
        let _as_store_value = module.getExport("as-store-value");
        expect(_as_store_value).not.toBeUndefined();
        let _as_store_value_result = module.invoke(_as_store_value);
    });

    _test("execution of memory_grow_4: as-storeN-address (instance 0)", () => {
        let _as_storeN_address = module.getExport("as-storeN-address");
        expect(_as_storeN_address).not.toBeUndefined();
        let _as_storeN_address_result = module.invoke(_as_storeN_address);
    });

    _test("execution of memory_grow_4: as-storeN-value (instance 0)", () => {
        let _as_storeN_value = module.getExport("as-storeN-value");
        expect(_as_storeN_value).not.toBeUndefined();
        let _as_storeN_value_result = module.invoke(_as_storeN_value);
    });

    _test("execution of memory_grow_4: as-unary-operand (instance 0)", () => {
        let _as_unary_operand = module.getExport("as-unary-operand");
        expect(_as_unary_operand).not.toBeUndefined();
        let _as_unary_operand_result = module.invoke(_as_unary_operand);
        expect(_as_unary_operand_result).toBe(31);
    });

    _test("execution of memory_grow_4: as-binary-left (instance 0)", () => {
        let _as_binary_left = module.getExport("as-binary-left");
        expect(_as_binary_left).not.toBeUndefined();
        let _as_binary_left_result = module.invoke(_as_binary_left);
        expect(_as_binary_left_result).toBe(11);
    });

    _test("execution of memory_grow_4: as-binary-right (instance 0)", () => {
        let _as_binary_right = module.getExport("as-binary-right");
        expect(_as_binary_right).not.toBeUndefined();
        let _as_binary_right_result = module.invoke(_as_binary_right);
        expect(_as_binary_right_result).toBe(9);
    });

    _test("execution of memory_grow_4: as-test-operand (instance 0)", () => {
        let _as_test_operand = module.getExport("as-test-operand");
        expect(_as_test_operand).not.toBeUndefined();
        let _as_test_operand_result = module.invoke(_as_test_operand);
        expect(_as_test_operand_result).toBe(0);
    });

    _test("execution of memory_grow_4: as-compare-left (instance 0)", () => {
        let _as_compare_left = module.getExport("as-compare-left");
        expect(_as_compare_left).not.toBeUndefined();
        let _as_compare_left_result = module.invoke(_as_compare_left);
        expect(_as_compare_left_result).toBe(1);
    });

    _test("execution of memory_grow_4: as-compare-right (instance 0)", () => {
        let _as_compare_right = module.getExport("as-compare-right");
        expect(_as_compare_right).not.toBeUndefined();
        let _as_compare_right_result = module.invoke(_as_compare_right);
        expect(_as_compare_right_result).toBe(1);
    });

    _test("execution of memory_grow_4: as-memory.grow-size (instance 0)", () => {
        let _as_memory_grow_size = module.getExport("as-memory.grow-size");
        expect(_as_memory_grow_size).not.toBeUndefined();
        let _as_memory_grow_size_result = module.invoke(_as_memory_grow_size);
        expect(_as_memory_grow_size_result).toBe(1);
    });
});

describe("memory_grow_5", () => {
    let _test = test;

    _test("execution of memory_grow_5: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_grow_6", () => {
    let _test = test;

    _test("execution of memory_grow_6: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_grow_7", () => {
    let _test = test;

    _test("execution of memory_grow_7: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_grow_8", () => {
    let _test = test;

    _test("execution of memory_grow_8: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_grow_9", () => {
    let _test = test;

    _test("execution of memory_grow_9: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_grow_10", () => {
    let _test = test;

    _test("execution of memory_grow_10: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_grow_11", () => {
    let _test = test;

    _test("execution of memory_grow_11: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
