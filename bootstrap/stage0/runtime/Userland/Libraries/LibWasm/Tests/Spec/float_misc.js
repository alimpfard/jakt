let globalImportObject = {};
let namedModules = {};

describe("float_misc_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_misc_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_misc_0: f32.add (instance 0)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(_f32_add, 1.123456789, 1.2345e-10);
        expect(_f32_add_result).toBe(1.123456789);
    });

    _test("execution of float_misc_0: f64.add (instance 0)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(_f64_add, 1.123456789, 1.2345e-10);
        expect(_f64_add_result).toBe(1.12345678912345);
    });

    _test("execution of float_misc_0: f32.add (instance 1)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(_f32_add, 1.0, 5.960464477539063e-8);
        expect(_f32_add_result).toBe(1.0);
    });

    _test("execution of float_misc_0: f32.add (instance 2)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(_f32_add, 1.0, 5.960465188081798e-8);
        expect(_f32_add_result).toBe(1.0000001192092896);
    });

    _test("execution of float_misc_0: f64.add (instance 1)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(_f64_add, 1.0, 1.1102230246251565e-16);
        expect(_f64_add_result).toBe(1.0);
    });

    _test("execution of float_misc_0: f64.add (instance 2)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(_f64_add, 1.0, 1.1102230246251568e-16);
        expect(_f64_add_result).toBe(1.0000000000000002);
    });

    _test("execution of float_misc_0: f32.add (instance 3)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(
            _f32_add,
            1.401298464324817e-45,
            1.1754942106924411e-38
        );
        expect(_f32_add_result).toBe(1.1754943508222875e-38);
    });

    _test("execution of float_misc_0: f64.add (instance 3)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(_f64_add, 5e-324, 2.225073858507201e-308);
        expect(_f64_add_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of float_misc_0: f32.add (instance 4)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(_f32_add, 2147483648.0, 1024.25);
        expect(_f32_add_result).toBe(2147484672.0);
    });

    _test("execution of float_misc_0: f64.add (instance 4)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(_f64_add, 9.223372036854776e18, 1024.25);
        expect(_f64_add_result).toBe(9.223372036854778e18);
    });

    _test("execution of float_misc_0: f64.add (instance 5)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(_f64_add, -3.645561009778199e-304, 2.92e-320);
        expect(_f64_add_result).toBe(-3.6455610097781983e-304);
    });

    _test("execution of float_misc_0: f64.add (instance 6)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(_f64_add, 9007199254740992.0, 1.00001);
        expect(_f64_add_result).toBe(9007199254740994.0);
    });

    _test("execution of float_misc_0: f64.add (instance 7)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(_f64_add, 9007199254740994.0, 0.9999847412109375);
        expect(_f64_add_result).toBe(9007199254740994.0);
    });

    _test("execution of float_misc_0: f32.add (instance 5)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(_f32_add, 8388608.0, 0.5);
        expect(_f32_add_result).toBe(8388608.0);
    });

    _test("execution of float_misc_0: f32.add (instance 6)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(_f32_add, 8388609.0, 0.5);
        expect(_f32_add_result).toBe(8388610.0);
    });

    _test("execution of float_misc_0: f64.add (instance 8)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(_f64_add, 4503599627370496.0, 0.5);
        expect(_f64_add_result).toBe(4503599627370496.0);
    });

    _test("execution of float_misc_0: f64.add (instance 9)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(_f64_add, 4503599627370497.0, 0.5);
        expect(_f64_add_result).toBe(4503599627370498.0);
    });

    _test("execution of float_misc_0: f32.add (instance 7)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(
            _f32_add,
            -6.207600156575025e30,
            2.3097990034335698e-30
        );
        expect(_f32_add_result).toBe(-6.207600156575025e30);
    });

    _test("execution of float_misc_0: f32.add (instance 8)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(_f32_add, 2.0986580749500023e20, -5270152505458688.0);
        expect(_f32_add_result).toBe(2.098605298391869e20);
    });

    _test("execution of float_misc_0: f32.add (instance 9)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(_f32_add, 1.9634920494274e-25, 4.622006701228597e-38);
        expect(_f32_add_result).toBe(1.9634920494274e-25);
    });

    _test("execution of float_misc_0: f32.add (instance 10)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(_f32_add, 640904986624.0, -6.444954909933568e16);
        expect(_f32_add_result).toBe(-6.444890914920858e16);
    });

    _test("execution of float_misc_0: f32.add (instance 11)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(_f32_add, 6.019659849698655e-5, 1.2037279221606141e32);
        expect(_f32_add_result).toBe(1.2037279221606141e32);
    });

    _test("execution of float_misc_0: f64.add (instance 10)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            9.218993827002741e-125,
            -1.2830782438780485e75
        );
        expect(_f64_add_result).toBe(-1.2830782438780485e75);
    });

    _test("execution of float_misc_0: f64.add (instance 11)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(_f64_add, -9.650340787014896e22, 4.670208988478548e-56);
        expect(_f64_add_result).toBe(-9.650340787014896e22);
    });

    _test("execution of float_misc_0: f64.add (instance 12)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            2.8559147675434106e-45,
            -0.00026124280570653086
        );
        expect(_f64_add_result).toBe(-0.00026124280570653086);
    });

    _test("execution of float_misc_0: f64.add (instance 13)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(_f64_add, 4.179099281652967e149, 7.93355647415127e19);
        expect(_f64_add_result).toBe(4.179099281652967e149);
    });

    _test("execution of float_misc_0: f64.add (instance 14)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(_f64_add, 8.265442868747023e96, 4.360332783900625e118);
        expect(_f64_add_result).toBe(4.360332783900625e118);
    });

    _test("execution of float_misc_0: f32.add (instance 12)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(_f32_add, 5.238404127822499e21, -1570182.5);
        expect(_f32_add_result).toBe(5.238404127822499e21);
    });

    _test("execution of float_misc_0: f32.add (instance 13)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(_f32_add, 4.25893790178232e-14, -5.70923525670006e-24);
        expect(_f32_add_result).toBe(4.25893790178232e-14);
    });

    _test("execution of float_misc_0: f32.add (instance 14)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(
            _f32_add,
            -2.7251025871630197e-13,
            8.371155873353713e37
        );
        expect(_f32_add_result).toBe(8.371155873353713e37);
    });

    _test("execution of float_misc_0: f32.add (instance 15)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(
            _f32_add,
            -8.845359747390244e-14,
            -1.5165625673454357e-32
        );
        expect(_f32_add_result).toBe(-8.845359747390244e-14);
    });

    _test("execution of float_misc_0: f32.add (instance 16)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(
            _f32_add,
            0.0010521034710109234,
            -7.582134723423548e-33
        );
        expect(_f32_add_result).toBe(0.0010521034710109234);
    });

    _test("execution of float_misc_0: f64.add (instance 15)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            1.5111352281889246e54,
            -2.760218100603169e-159
        );
        expect(_f64_add_result).toBe(1.5111352281889246e54);
    });

    _test("execution of float_misc_0: f64.add (instance 16)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(_f64_add, 6.238671976036028e46, -8.592185488839212e-19);
        expect(_f64_add_result).toBe(6.238671976036028e46);
    });

    _test("execution of float_misc_0: f64.add (instance 17)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            4.195022848436354e-122,
            -2.9225342022551453e-295
        );
        expect(_f64_add_result).toBe(4.195022848436354e-122);
    });

    _test("execution of float_misc_0: f64.add (instance 18)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            -2.1522054671482452e44,
            -1.1122204120471372e42
        );
        expect(_f64_add_result).toBe(-2.1633276712687165e44);
    });

    _test("execution of float_misc_0: f64.add (instance 19)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(_f64_add, -13.6911535055856, 2.0661178989244198e87);
        expect(_f64_add_result).toBe(2.0661178989244198e87);
    });

    _test("execution of float_misc_0: f32.add (instance 17)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(
            _f32_add,
            -6.456021030610507e-36,
            2.0219949033260104e-13
        );
        expect(_f32_add_result).toBe(2.0219949033260104e-13);
    });

    _test("execution of float_misc_0: f32.add (instance 18)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(_f32_add, -2.6823168809642084e-5, 1.119601567012296e-8);
        expect(_f32_add_result).toBe(-2.681197292986326e-5);
    });

    _test("execution of float_misc_0: f32.add (instance 19)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(_f32_add, -128526172160.0, 2.73563047337179e-33);
        expect(_f32_add_result).toBe(-128526172160.0);
    });

    _test("execution of float_misc_0: f32.add (instance 20)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(_f32_add, 4.158973127324512e-36, -1573528704.0);
        expect(_f32_add_result).toBe(-1573528704.0);
    });

    _test("execution of float_misc_0: f32.add (instance 21)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(
            _f32_add,
            -9.338768644095452e-37,
            7.8647514498630135e28
        );
        expect(_f32_add_result).toBe(7.8647514498630135e28);
    });

    _test("execution of float_misc_0: f64.add (instance 20)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            2.1986596650683218e-234,
            -2.3544759484546134e302
        );
        expect(_f64_add_result).toBe(-2.3544759484546134e302);
    });

    _test("execution of float_misc_0: f64.add (instance 21)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            -3.141756195935957e155,
            -3.011409851461166e148
        );
        expect(_f64_add_result).toBe(-3.1417564970769423e155);
    });

    _test("execution of float_misc_0: f64.add (instance 22)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            -1.3722858367681836e-291,
            1.1571842749688977e-85
        );
        expect(_f64_add_result).toBe(1.1571842749688977e-85);
    });

    _test("execution of float_misc_0: f64.add (instance 23)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            -9.828583756551075e-154,
            1.6862581574752944e-259
        );
        expect(_f64_add_result).toBe(-9.828583756551075e-154);
    });

    _test("execution of float_misc_0: f64.add (instance 24)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            -6.725842035221635e290,
            8.374007930974482e240
        );
        expect(_f64_add_result).toBe(-6.725842035221635e290);
    });

    _test("execution of float_misc_0: f64.add (instance 25)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            -2.1089660532788995e242,
            5.814832334211963e248
        );
        expect(_f64_add_result).toBe(5.814830225245911e248);
    });

    _test("execution of float_misc_0: f64.add (instance 26)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            1.0231579266682148e236,
            4.502043007974949e224
        );
        expect(_f64_add_result).toBe(1.0231579266727168e236);
    });

    _test("execution of float_misc_0: f64.add (instance 27)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            -1.3052997857095656e188,
            1.5489943422018657e203
        );
        expect(_f64_add_result).toBe(1.5489943422018645e203);
    });

    _test("execution of float_misc_0: f64.add (instance 28)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            4.7629997434721684e139,
            4.555864510582597e155
        );
        expect(_f64_add_result).toBe(4.555864510582597e155);
    });

    _test("execution of float_misc_0: f64.add (instance 29)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            3.958952516558414e-300,
            2.3092460710062946e-290
        );
        expect(_f64_add_result).toBe(2.30924607140219e-290);
    });

    _test("execution of float_misc_0: f64.add (instance 30)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            -4.3780558475415996e226,
            -4.9680759347383435e286
        );
        expect(_f64_add_result).toBe(-4.9680759347383435e286);
    });

    _test("execution of float_misc_0: f64.add (instance 31)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(_f64_add, 2.117431116854608e58, -2.6385928474612128e82);
        expect(_f64_add_result).toBe(-2.6385928474612128e82);
    });

    _test("execution of float_misc_0: f64.add (instance 32)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            -9.508489561700635e90,
            7.858068235728165e-128
        );
        expect(_f64_add_result).toBe(-9.508489561700635e90);
    });

    _test("execution of float_misc_0: f64.add (instance 33)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            -5.079144928553737e-96,
            -3.540217207424998e140
        );
        expect(_f64_add_result).toBe(-3.540217207424998e140);
    });

    _test("execution of float_misc_0: f64.add (instance 34)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            -4.165382103988111e-60,
            1.0865942283516648e-298
        );
        expect(_f64_add_result).toBe(-4.165382103988111e-60);
    });

    _test("execution of float_misc_0: f32.add (instance 22)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(_f32_add, 9.721564916252783e34, 3.0559086703943176e38);
        expect(_f32_add_result).toBe(3.0568808062866206e38);
    });

    _test("execution of float_misc_0: f32.add (instance 23)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(
            _f32_add,
            2.7046562782855097e38,
            -2.3023684683832103e32
        );
        expect(_f32_add_result).toBe(2.7046540472204533e38);
    });

    _test("execution of float_misc_0: f32.add (instance 24)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(_f32_add, 3.572092819342499e35, -2.364940520759259e38);
        expect(_f32_add_result).toBe(-2.3613683827798637e38);
    });

    _test("execution of float_misc_0: f32.add (instance 25)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(
            _f32_add,
            -1.4842340927922734e36,
            -3.2899139288350082e38
        );
        expect(_f32_add_result).toBe(-3.3047561905347684e38);
    });

    _test("execution of float_misc_0: f32.add (instance 26)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(
            _f32_add,
            -2.1988559814787968e38,
            -8.156092864302113e37
        );
        expect(_f32_add_result).toBe(-3.014465217202984e38);
    });

    _test("execution of float_misc_0: f64.add (instance 35)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            9.039020493954763e307,
            2.2943337422040356e295
        );
        expect(_f64_add_result).toBe(9.039020493957058e307);
    });

    _test("execution of float_misc_0: f64.add (instance 36)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            1.6591605973624605e308,
            1.257734933144416e298
        );
        expect(_f64_add_result).toBe(1.659160597488234e308);
    });

    _test("execution of float_misc_0: f64.add (instance 37)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            -1.363512925613943e308,
            6.050703060387358e304
        );
        expect(_f64_add_result).toBe(-1.3629078553079044e308);
    });

    _test("execution of float_misc_0: f64.add (instance 38)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            -3.4377613258227424e301,
            1.6994715275879349e308
        );
        expect(_f64_add_result).toBe(1.6994711838118022e308);
    });

    _test("execution of float_misc_0: f64.add (instance 39)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            9.227342700864557e307,
            -3.926941645101868e298
        );
        expect(_f64_add_result).toBe(9.227342696937615e307);
    });

    _test("execution of float_misc_0: f32.add (instance 27)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(_f32_add, 8.313455373330556e-39, 8.73008943274361e-43);
        expect(_f32_add_result).toBe(8.31432838227383e-39);
    });

    _test("execution of float_misc_0: f32.add (instance 28)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(
            _f32_add,
            5.184804318001823e-44,
            -2.802596928649634e-45
        );
        expect(_f32_add_result).toBe(4.90454462513686e-44);
    });

    _test("execution of float_misc_0: f32.add (instance 29)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(
            _f32_add,
            -1.1210387714598537e-44,
            5.18628408918015e-39
        );
        expect(_f32_add_result).toBe(5.1862728787924356e-39);
    });

    _test("execution of float_misc_0: f32.add (instance 30)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(
            _f32_add,
            -2.802596928649634e-44,
            2.3675282834709394e-37
        );
        expect(_f32_add_result).toBe(2.367528059263185e-37);
    });

    _test("execution of float_misc_0: f32.add (instance 31)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(
            _f32_add,
            6.347882043391421e-43,
            -3.3269628139999807e-41
        );
        expect(_f32_add_result).toBe(-3.2634839935660665e-41);
    });

    _test("execution of float_misc_0: f64.add (instance 40)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            2.8461489375936755e-308,
            -5.130160608603642e-308
        );
        expect(_f64_add_result).toBe(-2.284011671009967e-308);
    });

    _test("execution of float_misc_0: f64.add (instance 41)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            4.7404811354775e-308,
            -8.895417776504167e-308
        );
        expect(_f64_add_result).toBe(-4.154936641026667e-308);
    });

    _test("execution of float_misc_0: f64.add (instance 42)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            -9.330082001250494e-309,
            -2.9863980609419717e-308
        );
        expect(_f64_add_result).toBe(-3.919406261067021e-308);
    });

    _test("execution of float_misc_0: f64.add (instance 43)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            1.4418693884494008e-307,
            -1.6324914377759187e-307
        );
        expect(_f64_add_result).toBe(-1.906220493265178e-308);
    });

    _test("execution of float_misc_0: f64.add (instance 44)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            -4.3203619362281506e-308,
            2.521511966399844e-308
        );
        expect(_f64_add_result).toBe(-1.7988499698283067e-308);
    });

    _test("execution of float_misc_0: f32.add (instance 32)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(_f32_add, 3.4028232635611926e38, 2.028240960365167e31);
        expect(_f32_add_result).toBe(3.4028234663852886e38);
    });

    _test("execution of float_misc_0: f64.add (instance 45)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(_f64_add, 1.7976931348623155e308, 1.99584030953472e292);
        expect(_f64_add_result).toBe(1.7976931348623157e308);
    });

    _test("execution of float_misc_0: f32.add (instance 33)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(_f32_add, 2.0, 2.0);
        expect(_f32_add_result).toBe(4.0);
    });

    _test("execution of float_misc_0: f64.add (instance 46)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(_f64_add, 2.0, 2.0);
        expect(_f64_add_result).toBe(4.0);
    });

    _test("execution of float_misc_0: f32.add (instance 34)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(_f32_add, 3.4028234663852886e38, 1.0141204197362925e31);
        expect(_f32_add_result).toBe(3.4028234663852886e38);
    });

    _test("execution of float_misc_0: f32.add (instance 35)", () => {
        let _f32_add = module.getExport("f32.add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(_f32_add, 3.4028234663852886e38, 1.0141204801825835e31);
        expect(_f32_add_result).toBe(Infinity);
    });

    _test("execution of float_misc_0: f64.add (instance 47)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(
            _f64_add,
            1.7976931348623157e308,
            9.979201547673598e291
        );
        expect(_f64_add_result).toBe(1.7976931348623157e308);
    });

    _test("execution of float_misc_0: f64.add (instance 48)", () => {
        let _f64_add = module.getExport("f64.add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(_f64_add, 1.7976931348623157e308, 9.9792015476736e291);
        expect(_f64_add_result).toBe(Infinity);
    });

    _test("execution of float_misc_0: f32.sub (instance 0)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(_f32_sub, 65536.0, 7.275957614183426e-12);
        expect(_f32_sub_result).toBe(65536.0);
    });

    _test("execution of float_misc_0: f64.sub (instance 0)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(_f64_sub, 65536.0, 7.275957614183426e-12);
        expect(_f64_sub_result).toBe(65535.99999999999);
    });

    _test("execution of float_misc_0: f32.sub (instance 1)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(_f32_sub, 1.0, 2.9802322387695312e-8);
        expect(_f32_sub_result).toBe(1.0);
    });

    _test("execution of float_misc_0: f32.sub (instance 2)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(_f32_sub, 1.0, 2.980232594040899e-8);
        expect(_f32_sub_result).toBe(0.9999999403953552);
    });

    _test("execution of float_misc_0: f64.sub (instance 1)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(_f64_sub, 1.0, 5.551115123125783e-17);
        expect(_f64_sub_result).toBe(1.0);
    });

    _test("execution of float_misc_0: f64.sub (instance 2)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(_f64_sub, 1.0, 5.551115123125784e-17);
        expect(_f64_sub_result).toBe(0.9999999999999999);
    });

    _test("execution of float_misc_0: f32.sub (instance 3)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(
            _f32_sub,
            2.3792080598407964e-32,
            -7.221297616978506e35
        );
        expect(_f32_sub_result).toBe(7.221297616978506e35);
    });

    _test("execution of float_misc_0: f32.sub (instance 4)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(_f32_sub, -8.422840238404834e35, -11118414135296.0);
        expect(_f32_sub_result).toBe(-8.422840238404834e35);
    });

    _test("execution of float_misc_0: f32.sub (instance 5)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(_f32_sub, 1.454944372177124, -3.3792614555846486e-25);
        expect(_f32_sub_result).toBe(1.454944372177124);
    });

    _test("execution of float_misc_0: f32.sub (instance 6)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(
            _f32_sub,
            9.480891428414285e-36,
            1.8589502498367712e-23
        );
        expect(_f32_sub_result).toBe(-1.8589502498367712e-23);
    });

    _test("execution of float_misc_0: f32.sub (instance 7)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(_f32_sub, 6.18116700934479e-6, -9.395986424247663e-33);
        expect(_f32_sub_result).toBe(6.18116700934479e-6);
    });

    _test("execution of float_misc_0: f64.sub (instance 3)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(
            _f64_sub,
            -7.75701650124413e-101,
            -2.524845082116609e-272
        );
        expect(_f64_sub_result).toBe(-7.75701650124413e-101);
    });

    _test("execution of float_misc_0: f64.sub (instance 4)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(
            _f64_sub,
            -2.099187106483271e166,
            -3.8165079778426864e-48
        );
        expect(_f64_sub_result).toBe(-2.099187106483271e166);
    });

    _test("execution of float_misc_0: f64.sub (instance 5)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(
            _f64_sub,
            2.8592030964162332e-139,
            -2.0889465194336087e-252
        );
        expect(_f64_sub_result).toBe(2.8592030964162332e-139);
    });

    _test("execution of float_misc_0: f64.sub (instance 6)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(
            _f64_sub,
            3.03879528930943e-303,
            -2.3204941114021897e46
        );
        expect(_f64_sub_result).toBe(2.3204941114021897e46);
    });

    _test("execution of float_misc_0: f64.sub (instance 7)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(
            _f64_sub,
            -1.4953904039036317e-43,
            -1.0592252695645683e-162
        );
        expect(_f64_sub_result).toBe(-1.4953904039036317e-43);
    });

    _test("execution of float_misc_0: f32.sub (instance 8)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(_f32_sub, -4.486016552717641e32, -8.984148050887244e33);
        expect(_f32_sub_result).toBe(8.535546434301106e33);
    });

    _test("execution of float_misc_0: f32.sub (instance 9)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(_f32_sub, -8.994274245666093e32, 91.57938385009766);
        expect(_f32_sub_result).toBe(-8.994274245666093e32);
    });

    _test("execution of float_misc_0: f32.sub (instance 10)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(
            _f32_sub,
            -1.1974999753297125e-25,
            6.314040490451589e-8
        );
        expect(_f32_sub_result).toBe(-6.314040490451589e-8);
    });

    _test("execution of float_misc_0: f32.sub (instance 11)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(
            _f32_sub,
            -1.1800486661945162e-23,
            -0.00031558735645376146
        );
        expect(_f32_sub_result).toBe(0.00031558735645376146);
    });

    _test("execution of float_misc_0: f32.sub (instance 12)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(
            _f32_sub,
            -7.364838050540576e29,
            3.0824513295512927e-18
        );
        expect(_f32_sub_result).toBe(-7.364838050540576e29);
    });

    _test("execution of float_misc_0: f64.sub (instance 8)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(
            _f64_sub,
            -9.410469964196796e60,
            -1.730627569138597e271
        );
        expect(_f64_sub_result).toBe(1.730627569138597e271);
    });

    _test("execution of float_misc_0: f64.sub (instance 9)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(
            _f64_sub,
            2.877908564233173e-111,
            2.339448785991429e-136
        );
        expect(_f64_sub_result).toBe(2.877908564233173e-111);
    });

    _test("execution of float_misc_0: f64.sub (instance 10)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(
            _f64_sub,
            -9.719219783531962e-61,
            1.572015082308034e-153
        );
        expect(_f64_sub_result).toBe(-9.719219783531962e-61);
    });

    _test("execution of float_misc_0: f64.sub (instance 11)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(
            _f64_sub,
            -3.4908896031751274e-299,
            -1.9928479721303208e-99
        );
        expect(_f64_sub_result).toBe(1.9928479721303208e-99);
    });

    _test("execution of float_misc_0: f64.sub (instance 12)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(_f64_sub, -7.538298763725556e33, 4.447012580193329e51);
        expect(_f64_sub_result).toBe(-4.447012580193329e51);
    });

    _test("execution of float_misc_0: f32.sub (instance 13)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(_f32_sub, 7.584697644672857e28, 4.6391753130592406e-5);
        expect(_f32_sub_result).toBe(7.584697644672857e28);
    });

    _test("execution of float_misc_0: f32.sub (instance 14)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(_f32_sub, -567139.875, -3.0334842276991125e-11);
        expect(_f32_sub_result).toBe(-567139.875);
    });

    _test("execution of float_misc_0: f32.sub (instance 15)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(
            _f32_sub,
            -1.741226086926506e-11,
            -1.7877793367743258e-17
        );
        expect(_f32_sub_result).toBe(-1.7412243522030302e-11);
    });

    _test("execution of float_misc_0: f32.sub (instance 16)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(_f32_sub, -6.564554496435449e-5, 0.0001447380636818707);
        expect(_f32_sub_result).toBe(-0.0002103836159221828);
    });

    _test("execution of float_misc_0: f32.sub (instance 17)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(
            _f32_sub,
            -1.601611482326959e-10,
            -8.538007497388273e-32
        );
        expect(_f32_sub_result).toBe(-1.601611482326959e-10);
    });

    _test("execution of float_misc_0: f64.sub (instance 13)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(
            _f64_sub,
            -9.358725267183177e-48,
            -3.1137147338685164e217
        );
        expect(_f64_sub_result).toBe(3.1137147338685164e217);
    });

    _test("execution of float_misc_0: f64.sub (instance 14)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(
            _f64_sub,
            -4.390767596767215e228,
            -6.789045715895856e271
        );
        expect(_f64_sub_result).toBe(6.789045715895856e271);
    });

    _test("execution of float_misc_0: f64.sub (instance 15)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(
            _f64_sub,
            3.6288281010831153e-240,
            3.3831996832450044e54
        );
        expect(_f64_sub_result).toBe(-3.3831996832450044e54);
    });

    _test("execution of float_misc_0: f64.sub (instance 16)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(
            _f64_sub,
            -3.645097751812619e-173,
            3.1423490969686624e-164
        );
        expect(_f64_sub_result).toBe(-3.1423491006137603e-164);
    });

    _test("execution of float_misc_0: f64.sub (instance 17)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(
            _f64_sub,
            -8.021529638989887e-169,
            -6.774972769072139e-5
        );
        expect(_f64_sub_result).toBe(6.774972769072139e-5);
    });

    _test("execution of float_misc_0: f64.sub (instance 18)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(
            _f64_sub,
            5.816988065793039e-24,
            2.5021499241540866e-35
        );
        expect(_f64_sub_result).toBe(5.816988065768018e-24);
    });

    _test("execution of float_misc_0: f64.sub (instance 19)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(
            _f64_sub,
            4.3336683304809554e-296,
            1.6945582607476316e-304
        );
        expect(_f64_sub_result).toBe(4.3336683135353726e-296);
    });

    _test("execution of float_misc_0: f64.sub (instance 20)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(
            _f64_sub,
            6.908052676315257e-77,
            1.2001773734799856e-60
        );
        expect(_f64_sub_result).toBe(-1.2001773734799856e-60);
    });

    _test("execution of float_misc_0: f64.sub (instance 21)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(
            _f64_sub,
            -2.2044291547443813e-12,
            -2.7947429925618632e-21
        );
        expect(_f64_sub_result).toBe(-2.204429151949638e-12);
    });

    _test("execution of float_misc_0: f64.sub (instance 22)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(_f64_sub, 4.016393569117761e-8, 0.17053881989395447);
        expect(_f64_sub_result).toBe(-0.17053877973001877);
    });

    _test("execution of float_misc_0: f64.sub (instance 23)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(
            _f64_sub,
            -1.0015106898667285e-245,
            -4.785375958943186e-231
        );
        expect(_f64_sub_result).toBe(4.7853759589431757e-231);
    });

    _test("execution of float_misc_0: f64.sub (instance 24)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(_f64_sub, -15618959953.641388, 5.982344106207189e110);
        expect(_f64_sub_result).toBe(-5.982344106207189e110);
    });

    _test("execution of float_misc_0: f64.sub (instance 25)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(
            _f64_sub,
            3.883207154037668e34,
            4.2192279274320304e-178
        );
        expect(_f64_sub_result).toBe(3.883207154037668e34);
    });

    _test("execution of float_misc_0: f64.sub (instance 26)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(
            _f64_sub,
            1.0705986890807897e-147,
            -1.7466607734737216e-209
        );
        expect(_f64_sub_result).toBe(1.0705986890807897e-147);
    });

    _test("execution of float_misc_0: f64.sub (instance 27)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(
            _f64_sub,
            9.49378346261834e-18,
            1.4584885434950294e-186
        );
        expect(_f64_sub_result).toBe(9.49378346261834e-18);
    });

    _test("execution of float_misc_0: f32.sub (instance 18)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(_f32_sub, 23.14069175720215, 3.1415927410125732);
        expect(_f32_sub_result).toBe(19.999099731445312);
    });

    _test("execution of float_misc_0: f64.sub (instance 28)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(_f64_sub, 23.14069263277927, 3.141592653589793);
        expect(_f64_sub_result).toBe(19.999099979189477);
    });

    _test("execution of float_misc_0: f32.sub (instance 19)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(_f32_sub, 2999999.0, 2999998.0);
        expect(_f32_sub_result).toBe(1.0);
    });

    _test("execution of float_misc_0: f32.sub (instance 20)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(_f32_sub, 1999999.0, 1999995.0);
        expect(_f32_sub_result).toBe(4.0);
    });

    _test("execution of float_misc_0: f32.sub (instance 21)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(_f32_sub, 1999999.0, 1999993.0);
        expect(_f32_sub_result).toBe(6.0);
    });

    _test("execution of float_misc_0: f32.sub (instance 22)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(_f32_sub, 400002.0, 400001.0);
        expect(_f32_sub_result).toBe(1.0);
    });

    _test("execution of float_misc_0: f32.sub (instance 23)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(_f32_sub, 400002.0, 400000.0);
        expect(_f32_sub_result).toBe(2.0);
    });

    _test("execution of float_misc_0: f64.sub (instance 29)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(_f64_sub, 2999999999999999.0, 2999999999999998.0);
        expect(_f64_sub_result).toBe(1.0);
    });

    _test("execution of float_misc_0: f64.sub (instance 30)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(_f64_sub, 1999999999999999.0, 1999999999999995.0);
        expect(_f64_sub_result).toBe(4.0);
    });

    _test("execution of float_misc_0: f64.sub (instance 31)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(_f64_sub, 1999999999999999.0, 1999999999999993.0);
        expect(_f64_sub_result).toBe(6.0);
    });

    _test("execution of float_misc_0: f64.sub (instance 32)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(_f64_sub, 400000000000002.0, 400000000000001.0);
        expect(_f64_sub_result).toBe(1.0);
    });

    _test("execution of float_misc_0: f64.sub (instance 33)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(_f64_sub, 400000000000002.0, 400000000000000.0);
        expect(_f64_sub_result).toBe(2.0);
    });

    _test("execution of float_misc_0: f32.sub (instance 24)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(
            _f32_sub,
            1.1754943508222875e-38,
            1.1754942106924411e-38
        );
        expect(_f32_sub_result).toBe(1.401298464324817e-45);
    });

    _test("execution of float_misc_0: f64.sub (instance 34)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(
            _f64_sub,
            2.2250738585072014e-308,
            2.225073858507201e-308
        );
        expect(_f64_sub_result).toBe(5e-324);
    });

    _test("execution of float_misc_0: f32.sub (instance 25)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(_f32_sub, 1.0000001192092896, 0.9999999403953552);
        expect(_f32_sub_result).toBe(1.7881393432617188e-7);
    });

    _test("execution of float_misc_0: f32.sub (instance 26)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(_f32_sub, 1.0000001192092896, 1.0);
        expect(_f32_sub_result).toBe(1.1920928955078125e-7);
    });

    _test("execution of float_misc_0: f32.sub (instance 27)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(_f32_sub, 1.0, 0.9999999403953552);
        expect(_f32_sub_result).toBe(5.960464477539063e-8);
    });

    _test("execution of float_misc_0: f64.sub (instance 35)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(_f64_sub, 1.0000000000000002, 0.9999999999999999);
        expect(_f64_sub_result).toBe(3.3306690738754696e-16);
    });

    _test("execution of float_misc_0: f64.sub (instance 36)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(_f64_sub, 1.0000000000000002, 1.0);
        expect(_f64_sub_result).toBe(2.220446049250313e-16);
    });

    _test("execution of float_misc_0: f64.sub (instance 37)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(_f64_sub, 1.0, 0.9999999999999999);
        expect(_f64_sub_result).toBe(1.1102230246251565e-16);
    });

    _test("execution of float_misc_0: f32.sub (instance 28)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(_f32_sub, 3.4028234663852886e38, 1.0141204197362925e31);
        expect(_f32_sub_result).toBe(3.4028234663852886e38);
    });

    _test("execution of float_misc_0: f32.sub (instance 29)", () => {
        let _f32_sub = module.getExport("f32.sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(_f32_sub, 3.4028234663852886e38, 1.0141204801825835e31);
        expect(_f32_sub_result).toBe(3.4028232635611926e38);
    });

    _test("execution of float_misc_0: f64.sub (instance 38)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(
            _f64_sub,
            1.7976931348623157e308,
            9.979201547673598e291
        );
        expect(_f64_sub_result).toBe(1.7976931348623157e308);
    });

    _test("execution of float_misc_0: f64.sub (instance 39)", () => {
        let _f64_sub = module.getExport("f64.sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(_f64_sub, 1.7976931348623157e308, 9.9792015476736e291);
        expect(_f64_sub_result).toBe(1.7976931348623155e308);
    });

    _test("execution of float_misc_0: f32.mul (instance 0)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(_f32_mul, 1000000000000000.0, 1000000000000000.0);
        expect(_f32_mul_result).toBe(9.999999394896025e29);
    });

    _test("execution of float_misc_0: f32.mul (instance 1)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(_f32_mul, 1e20, 1e20);
        expect(_f32_mul_result).toBe(Infinity);
    });

    _test("execution of float_misc_0: f32.mul (instance 2)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(_f32_mul, 1e25, 1e25);
        expect(_f32_mul_result).toBe(Infinity);
    });

    _test("execution of float_misc_0: f64.mul (instance 0)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(_f64_mul, 1000000000000000.0, 1000000000000000.0);
        expect(_f64_mul_result).toBe(1e30);
    });

    _test("execution of float_misc_0: f64.mul (instance 1)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(_f64_mul, 1e20, 1e20);
        expect(_f64_mul_result).toBe(1e40);
    });

    _test("execution of float_misc_0: f64.mul (instance 2)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(_f64_mul, 1e25, 1e25);
        expect(_f64_mul_result).toBe(1.0000000000000003e50);
    });

    _test("execution of float_misc_0: f32.mul (instance 3)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(_f32_mul, 1848874880.0, 19954563072.0);
        expect(_f32_mul_result).toBe(3.6893492545465614e19);
    });

    _test("execution of float_misc_0: f64.mul (instance 3)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(_f64_mul, 1848874847.0, 19954562207.0);
        expect(_f64_mul_result).toBe(3.689348814741911e19);
    });

    _test("execution of float_misc_0: f32.mul (instance 4)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(_f32_mul, 77.1, 850.0);
        expect(_f32_mul_result).toBe(65535.0);
    });

    _test("execution of float_misc_0: f64.mul (instance 4)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(_f64_mul, 77.1, 850.0);
        expect(_f64_mul_result).toBe(65534.99999999999);
    });

    _test("execution of float_misc_0: f32.mul (instance 5)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(
            _f32_mul,
            -2.493839431476183e18,
            2.1176053965898944e-11
        );
        expect(_f32_mul_result).toBe(-52809680.0);
    });

    _test("execution of float_misc_0: f32.mul (instance 6)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(
            _f32_mul,
            -6.777248420629078e30,
            -3.4758241830226954e-31
        );
        expect(_f32_mul_result).toBe(2.355652332305908);
    });

    _test("execution of float_misc_0: f32.mul (instance 7)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(
            _f32_mul,
            -8.384397588099775e27,
            -1.1948990730232888e-29
        );
        expect(_f32_mul_result).toBe(0.1001850888133049);
    });

    _test("execution of float_misc_0: f32.mul (instance 8)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(
            _f32_mul,
            -6.567654100365863e23,
            -4.6889765988592106e-23
        );
        expect(_f32_mul_result).toBe(30.795576095581055);
    });

    _test("execution of float_misc_0: f32.mul (instance 9)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(_f32_mul, 1.3328203716231168e16, 45.567222595214844);
        expect(_f32_mul_result).toBe(6.07329197655851e17);
    });

    _test("execution of float_misc_0: f64.mul (instance 5)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(
            _f64_mul,
            -9.942622609334243e127,
            5.8317724151424514e284
        );
        expect(_f64_mul_result).toBe(-Infinity);
    });

    _test("execution of float_misc_0: f64.mul (instance 6)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(
            _f64_mul,
            -2.748155824301909e-297,
            -2.093035437779455e-66
        );
        expect(_f64_mul_result).toBe(0.0);
    });

    _test("execution of float_misc_0: f64.mul (instance 7)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(
            _f64_mul,
            4.648882573713025e182,
            -1.5927288648725436e32
        );
        expect(_f64_mul_result).toBe(-7.404409464555696e214);
    });

    _test("execution of float_misc_0: f64.mul (instance 8)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(
            _f64_mul,
            -8.261927764172427e-95,
            3.6684744190529535e175
        );
        expect(_f64_mul_result).toBe(-3.0308670654929913e81);
    });

    _test("execution of float_misc_0: f64.mul (instance 9)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(
            _f64_mul,
            2.5383895833176925e239,
            7.842892881810105e-259
        );
        expect(_f64_mul_result).toBe(1.9908317594263248e-19);
    });

    _test("execution of float_misc_0: f32.mul (instance 10)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(
            _f32_mul,
            -2.0153333457426413e-27,
            -5.031353283027048e27
        );
        expect(_f32_mul_result).toBe(10.139854431152344);
    });

    _test("execution of float_misc_0: f32.mul (instance 11)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(_f32_mul, 1.2286325312524885e22, 749601.8125);
        expect(_f32_mul_result).toBe(9.20985190161432e27);
    });

    _test("execution of float_misc_0: f32.mul (instance 12)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(
            _f32_mul,
            -2.7635138621917577e-10,
            -3.5524713616272016e22
        );
        expect(_f32_mul_result).toBe(9817304334336.0);
    });

    _test("execution of float_misc_0: f32.mul (instance 13)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(_f32_mul, 2.189312192933622e20, -40298.78515625);
        expect(_f32_mul_result).toBe(-8.822662062252868e24);
    });

    _test("execution of float_misc_0: f32.mul (instance 14)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(_f32_mul, 1691996288.0, -1.2210335231587333e20);
        expect(_f32_mul_result).toBe(-2.0659841458027955e29);
    });

    _test("execution of float_misc_0: f64.mul (instance 10)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(
            _f64_mul,
            -7.576316076452304e-193,
            4.601355879514986e-95
        );
        expect(_f64_mul_result).toBe(-3.486132652344772e-287);
    });

    _test("execution of float_misc_0: f64.mul (instance 11)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(
            _f64_mul,
            1.2228616081443885e-83,
            -8.055526185180067e-192
        );
        expect(_f64_mul_result).toBe(-9.850793705258527e-275);
    });

    _test("execution of float_misc_0: f64.mul (instance 12)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(
            _f64_mul,
            -2.0686512460392508e99,
            -3.668010715832548e251
        );
        expect(_f64_mul_result).toBe(Infinity);
    });

    _test("execution of float_misc_0: f64.mul (instance 13)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(
            _f64_mul,
            1.543238835610281e285,
            7.370621385787007e-133
        );
        expect(_f64_mul_result).toBe(1.1374629165126177e153);
    });

    _test("execution of float_misc_0: f64.mul (instance 14)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(_f64_mul, 2.2358765662420587e102, -7.60669005920257e50);
        expect(_f64_mul_result).toBe(-1.700762005003744e153);
    });

    _test("execution of float_misc_0: f32.mul (instance 15)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(_f32_mul, -110087033061376.0, -5.403802077401142e28);
        expect(_f32_mul_result).toBe(Infinity);
    });

    _test("execution of float_misc_0: f32.mul (instance 16)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(_f32_mul, -0.19366350769996643, 2.9748953998406853e-30);
        expect(_f32_mul_result).toBe(-5.761286832871643e-31);
    });

    _test("execution of float_misc_0: f32.mul (instance 17)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(_f32_mul, -3.4300712741242023e-6, 7.799152327916086e31);
        expect(_f32_mul_result).toBe(-2.6751649033785514e26);
    });

    _test("execution of float_misc_0: f32.mul (instance 18)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(
            _f32_mul,
            -9.900384948584448e16,
            2.0933773655262767e-29
        );
        expect(_f32_mul_result).toBe(-2.0725242268898603e-12);
    });

    _test("execution of float_misc_0: f32.mul (instance 19)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(_f32_mul, -129919.0703125, 1.8480998564440598e-36);
        expect(_f32_mul_result).toBe(-2.401034198136483e-31);
    });

    _test("execution of float_misc_0: f64.mul (instance 15)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(
            _f64_mul,
            -6.625572200844895e-150,
            -3.737402068174001e130
        );
        expect(_f64_mul_result).toBe(2.4762427246273877e-19);
    });

    _test("execution of float_misc_0: f64.mul (instance 16)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(
            _f64_mul,
            8.21076848561758e143,
            -1.2976552328552289e-230
        );
        expect(_f64_mul_result).toBe(-1.0654746691124455e-86);
    });

    _test("execution of float_misc_0: f64.mul (instance 17)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(
            _f64_mul,
            -1.0223449294906041e52,
            1.9708555833346805e108
        );
        expect(_f64_mul_result).toBe(-2.0148942123804574e160);
    });

    _test("execution of float_misc_0: f64.mul (instance 18)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(_f64_mul, 2.918243080119086e231, -6.36331709416897e112);
        expect(_f64_mul_result).toBe(-Infinity);
    });

    _test("execution of float_misc_0: f64.mul (instance 19)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(_f64_mul, 3.407037798802672e24, 1.225791423971563e21);
        expect(_f64_mul_result).toBe(4.1763177149192664e45);
    });

    _test("execution of float_misc_0: f64.mul (instance 20)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(
            _f64_mul,
            4.4091927284399547e-103,
            1.1518840702296592e-173
        );
        expect(_f64_mul_result).toBe(5.078878866462432e-276);
    });

    _test("execution of float_misc_0: f64.mul (instance 21)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(_f64_mul, -0.002980041826472432, 6.3125412993218e217);
        expect(_f64_mul_result).toBe(-1.8811637103313594e215);
    });

    _test("execution of float_misc_0: f64.mul (instance 22)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(
            _f64_mul,
            -3.083445780813001e110,
            -1.0081049555008529e-196
        );
        expect(_f64_mul_result).toBe(3.1084369716557833e-86);
    });

    _test("execution of float_misc_0: f64.mul (instance 23)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(_f64_mul, 3.493875013156773e233, 2.1313169159308099e18);
        expect(_f64_mul_result).toBe(7.44655491768901e251);
    });

    _test("execution of float_misc_0: f64.mul (instance 24)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(
            _f64_mul,
            -1.2500108005100234e-83,
            1.0352657041604675e270
        );
        expect(_f64_mul_result).toBe(-1.294093311598199e187);
    });

    _test("execution of float_misc_0: f64.mul (instance 25)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(
            _f64_mul,
            8.947461661755698e-181,
            2.0853844141312436e-128
        );
        expect(_f64_mul_result).toBe(1.8658897095462173e-308);
    });

    _test("execution of float_misc_0: f64.mul (instance 26)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(
            _f64_mul,
            -1.161813037330394e-17,
            -1.8737038135583668e-291
        );
        expect(_f64_mul_result).toBe(2.1768935186877886e-308);
    });

    _test("execution of float_misc_0: f64.mul (instance 27)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(
            _f64_mul,
            -2.1752326768352433e-147,
            -6.631210068072052e-162
        );
        expect(_f64_mul_result).toBe(1.4424424827029184e-308);
    });

    _test("execution of float_misc_0: f64.mul (instance 28)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(
            _f64_mul,
            -7.149518157441743e-233,
            2.2770445062365393e-77
        );
        expect(_f64_mul_result).toBe(-1.627977104264113e-309);
    });

    _test("execution of float_misc_0: f64.mul (instance 29)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(
            _f64_mul,
            -4.817739302150786e-156,
            -2.5375023049719763e-153
        );
        expect(_f64_mul_result).toBe(1.2225024583961697e-308);
    });

    _test("execution of float_misc_0: f64.mul (instance 30)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(
            _f64_mul,
            4.6576441629501554e256,
            7.021344893525714e-266
        );
        expect(_f64_mul_result).toBe(3.270292605938992e-9);
    });

    _test("execution of float_misc_0: f64.mul (instance 31)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(_f64_mul, 0.012451716278313712, 1.945309177849331e-45);
        expect(_f64_mul_result).toBe(2.422243795617958e-47);
    });

    _test("execution of float_misc_0: f64.mul (instance 32)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(_f64_mul, -3.8312314777598586, 9.039887741742674e-13);
        expect(_f64_mul_result).toBe(-3.4633902471580017e-12);
    });

    _test("execution of float_misc_0: f64.mul (instance 33)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(
            _f64_mul,
            9.843582638849689e-113,
            3.375405654777583e-62
        );
        expect(_f64_mul_result).toBe(3.3226084502443684e-174);
    });

    _test("execution of float_misc_0: f64.mul (instance 34)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(
            _f64_mul,
            -2.6054453709451446e23,
            3.2887528185809035e-105
        );
        expect(_f64_mul_result).toBe(-8.568665807354412e-82);
    });

    _test("execution of float_misc_0: f32.mul (instance 20)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(
            _f32_mul,
            2.6469779601696886e-23,
            2.6469779601696886e-23
        );
        expect(_f32_mul_result).toBe(0.0);
    });

    _test("execution of float_misc_0: f32.mul (instance 21)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(
            _f32_mul,
            2.6469782757140506e-23,
            2.6469782757140506e-23
        );
        expect(_f32_mul_result).toBe(1.401298464324817e-45);
    });

    _test("execution of float_misc_0: f64.mul (instance 35)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(
            _f64_mul,
            1.5717277847026285e-162,
            1.5717277847026285e-162
        );
        expect(_f64_mul_result).toBe(0.0);
    });

    _test("execution of float_misc_0: f64.mul (instance 36)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(
            _f64_mul,
            1.5717277847026288e-162,
            1.5717277847026288e-162
        );
        expect(_f64_mul_result).toBe(5e-324);
    });

    _test("execution of float_misc_0: f32.mul (instance 22)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(_f32_mul, 1.8446742974197924e19, 1.8446742974197924e19);
        expect(_f32_mul_result).toBe(3.4028232635611926e38);
    });

    _test("execution of float_misc_0: f32.mul (instance 23)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(_f32_mul, 1.8446744073709552e19, 1.8446744073709552e19);
        expect(_f32_mul_result).toBe(Infinity);
    });

    _test("execution of float_misc_0: f64.mul (instance 37)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(
            _f64_mul,
            1.3407807929942596e154,
            1.3407807929942596e154
        );
        expect(_f64_mul_result).toBe(1.7976931348623155e308);
    });

    _test("execution of float_misc_0: f64.mul (instance 38)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(
            _f64_mul,
            1.3407807929942597e154,
            1.3407807929942597e154
        );
        expect(_f64_mul_result).toBe(Infinity);
    });

    _test("execution of float_misc_0: f32.mul (instance 24)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(_f32_mul, 1.0000001192092896, 1.0000001192092896);
        expect(_f32_mul_result).toBe(1.000000238418579);
    });

    _test("execution of float_misc_0: f32.mul (instance 25)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(_f32_mul, 0.9999999403953552, 0.9999999403953552);
        expect(_f32_mul_result).toBe(0.9999998807907104);
    });

    _test("execution of float_misc_0: f64.mul (instance 39)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(_f64_mul, 1.0000000000000002, 1.0000000000000002);
        expect(_f64_mul_result).toBe(1.0000000000000004);
    });

    _test("execution of float_misc_0: f64.mul (instance 40)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(_f64_mul, 0.9999999999999999, 0.9999999999999999);
        expect(_f64_mul_result).toBe(0.9999999999999998);
    });

    _test("execution of float_misc_0: f32.mul (instance 26)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(_f32_mul, 1.0000001192092896, 0.9999999403953552);
        expect(_f32_mul_result).toBe(1.0);
    });

    _test("execution of float_misc_0: f32.mul (instance 27)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(_f32_mul, 1.000000238418579, 0.9999998807907104);
        expect(_f32_mul_result).toBe(1.0000001192092896);
    });

    _test("execution of float_misc_0: f64.mul (instance 41)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(_f64_mul, 1.0000000000000002, 0.9999999999999999);
        expect(_f64_mul_result).toBe(1.0);
    });

    _test("execution of float_misc_0: f64.mul (instance 42)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(_f64_mul, 1.0000000000000004, 0.9999999999999998);
        expect(_f64_mul_result).toBe(1.0000000000000002);
    });

    _test("execution of float_misc_0: f32.mul (instance 28)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(
            _f32_mul,
            1.1754943508222875e-38,
            1.1920928955078125e-7
        );
        expect(_f32_mul_result).toBe(1.401298464324817e-45);
    });

    _test("execution of float_misc_0: f64.mul (instance 43)", () => {
        let _f64_mul = module.getExport("f64.mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(
            _f64_mul,
            2.2250738585072014e-308,
            2.220446049250313e-16
        );
        expect(_f64_mul_result).toBe(5e-324);
    });

    _test("execution of float_misc_0: f32.mul (instance 29)", () => {
        let _f32_mul = module.getExport("f32.mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(_f32_mul, -16.00146484375, 2.9846536251347144e-40);
        expect(_f32_mul_result).toBe(-4.7758830053364123e-39);
    });

    _test("execution of float_misc_0: f32.div (instance 0)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, 1.123456789, 100.0);
        expect(_f32_div_result).toBe(0.011234568431973457);
    });

    _test("execution of float_misc_0: f32.div (instance 1)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, 8391667.0, 12582905.0);
        expect(_f32_div_result).toBe(0.6669101715087891);
    });

    _test("execution of float_misc_0: f32.div (instance 2)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, 65536.0, 7.275957614183426e-12);
        expect(_f32_div_result).toBe(9007199254740992.0);
    });

    _test("execution of float_misc_0: f32.div (instance 3)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, 1.8622957468032837, 3.4028234663852886e38);
        expect(_f32_div_result).toBe(5.4727949744944666e-39);
    });

    _test("execution of float_misc_0: f32.div (instance 4)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, 4.0, 3.0);
        expect(_f32_div_result).toBe(1.3333333730697632);
    });

    _test("execution of float_misc_0: f64.div (instance 0)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, 1.123456789, 100.0);
        expect(_f64_div_result).toBe(0.01123456789);
    });

    _test("execution of float_misc_0: f64.div (instance 1)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, 8391667.0, 12582905.0);
        expect(_f64_div_result).toBe(0.6669101451532854);
    });

    _test("execution of float_misc_0: f64.div (instance 2)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, 65536.0, 7.275957614183426e-12);
        expect(_f64_div_result).toBe(9007199254740992.0);
    });

    _test("execution of float_misc_0: f64.div (instance 3)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, 1.8622957468032837, 1.7976931348623157e308);
        expect(_f64_div_result).toBe(1.035936395755283e-308);
    });

    _test("execution of float_misc_0: f64.div (instance 4)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, 4.0, 3.0);
        expect(_f64_div_result).toBe(1.3333333333333333);
    });

    _test("execution of float_misc_0: f32.div (instance 5)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, 4195835.0, 3145727.0);
        expect(_f32_div_result).toBe(1.3338204622268677);
    });

    _test("execution of float_misc_0: f64.div (instance 5)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, 4195835.0, 3145727.0);
        expect(_f64_div_result).toBe(1.333820449136241);
    });

    _test("execution of float_misc_0: f32.div (instance 6)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, 5.029632936401568e-15, 3.3632437638124346e38);
        expect(_f32_div_result).toBe(0.0);
    });

    _test("execution of float_misc_0: f32.div (instance 7)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, 8.921986793542511e-27, 3.540975262112143e20);
        expect(_f32_div_result).toBe(0.0);
    });

    _test("execution of float_misc_0: f32.div (instance 8)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, -104167.46875, 1.5866622669037328e-24);
        expect(_f32_div_result).toBe(-6.565194917182447e28);
    });

    _test("execution of float_misc_0: f32.div (instance 9)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(
            _f32_div,
            -2.4938657382648078e-23,
            -3.6230087506368875e-37
        );
        expect(_f32_div_result).toBe(68834107064320.0);
    });

    _test("execution of float_misc_0: f32.div (instance 10)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, -4142204190720.0, 1.1954948388200605e-24);
        expect(_f32_div_result).toBe(-3.464844983329765e36);
    });

    _test("execution of float_misc_0: f64.div (instance 6)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, 1.9390116382448384e44, 2.5290742357348314e67);
        expect(_f64_div_result).toBe(7.666883046955921e-24);
    });

    _test("execution of float_misc_0: f64.div (instance 7)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(
            _f64_div,
            6.600332149752304e-189,
            3.007915153468629e-293
        );
        expect(_f64_div_result).toBe(2.1943212534239927e104);
    });

    _test("execution of float_misc_0: f64.div (instance 8)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, -9.348275173661903e89, 4.809309529035847e192);
        expect(_f64_div_result).toBe(-1.9437873809582001e-103);
    });

    _test("execution of float_misc_0: f64.div (instance 9)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(
            _f64_div,
            -1.7598339088417535e208,
            1.9938607258068285e74
        );
        expect(_f64_div_result).toBe(-8.826262968440915e133);
    });

    _test("execution of float_misc_0: f64.div (instance 10)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(
            _f64_div,
            -4.566268877844991e162,
            3.128249582233453e136
        );
        expect(_f64_div_result).toBe(-1.4596881603624626e26);
    });

    _test("execution of float_misc_0: f32.div (instance 11)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(
            _f32_div,
            -1.0394063760428808e21,
            -1.2965965897989387e-26
        );
        expect(_f32_div_result).toBe(Infinity);
    });

    _test("execution of float_misc_0: f32.div (instance 12)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, 2.6831562620062248e-14, 31241038462976.0);
        expect(_f32_div_result).toBe(8.588563253408382e-28);
    });

    _test("execution of float_misc_0: f32.div (instance 13)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, 1.273424744606018, -6.927837068229471e26);
        expect(_f32_div_result).toBe(-1.838127376001605e-27);
    });

    _test("execution of float_misc_0: f32.div (instance 14)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, 6.898882714456895e-16, 3.762675552004818e-39);
        expect(_f32_div_result).toBe(1.833504579575151e23);
    });

    _test("execution of float_misc_0: f32.div (instance 15)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, 1.8199162204928903e27, 2.050670305246714e26);
        expect(_f32_div_result).toBe(8.874738693237305);
    });

    _test("execution of float_misc_0: f64.div (instance 11)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(
            _f64_div,
            2.1137715924428077e-308,
            -1.6733261612910253e109
        );
        expect(_f64_div_result).toBe(-0.0);
    });

    _test("execution of float_misc_0: f64.div (instance 12)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(
            _f64_div,
            -8.116644948016275e-298,
            6.517571349002277e-162
        );
        expect(_f64_div_result).toBe(-1.2453480772801648e-136);
    });

    _test("execution of float_misc_0: f64.div (instance 13)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, -9.335476912259029e-122, -39099281466396.5);
        expect(_f64_div_result).toBe(2.3876338802497726e-135);
    });

    _test("execution of float_misc_0: f64.div (instance 14)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(
            _f64_div,
            -1.6868569854885902e24,
            1.3535993861076857e-238
        );
        expect(_f64_div_result).toBe(-1.2462010568276012e262);
    });

    _test("execution of float_misc_0: f64.div (instance 15)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, -1.733887733249412e71, -7.002616047521747e16);
        expect(_f64_div_result).toBe(2.47605712134259e54);
    });

    _test("execution of float_misc_0: f32.div (instance 16)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, 93506192.0, 2.87608846381627e-36);
        expect(_f32_div_result).toBe(Infinity);
    });

    _test("execution of float_misc_0: f32.div (instance 17)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, -2.0057539346671753e23, 246697216.0);
        expect(_f32_div_result).toBe(-813042812059648.0);
    });

    _test("execution of float_misc_0: f32.div (instance 18)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, 384712212480.0, -1.0703784816622988e29);
        expect(_f32_div_result).toBe(-3.594170071894972e-18);
    });

    _test("execution of float_misc_0: f32.div (instance 19)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, -4.156665003774592e33, -901.419189453125);
        expect(_f32_div_result).toBe(4.6112453460766724e30);
    });

    _test("execution of float_misc_0: f32.div (instance 20)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, -6.702386865118696e27, -14000.2548828125);
        expect(_f32_div_result).toBe(4.78733216850236e23);
    });

    _test("execution of float_misc_0: f64.div (instance 16)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(
            _f64_div,
            -1.0085269598907525e-197,
            1.8780374032850215e-208
        );
        expect(_f64_div_result).toBe(-53701111496.85621);
    });

    _test("execution of float_misc_0: f64.div (instance 17)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(
            _f64_div,
            -3.25716645629511e235,
            -5.885738519211168e-167
        );
        expect(_f64_div_result).toBe(Infinity);
    });

    _test("execution of float_misc_0: f64.div (instance 18)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(
            _f64_div,
            -3.1640946861233317e-225,
            4.5854510556516254e-20
        );
        expect(_f64_div_result).toBe(-6.900291046010721e-206);
    });

    _test("execution of float_misc_0: f64.div (instance 19)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(
            _f64_div,
            -5.268422429466566e95,
            -1.4816907071451201e-177
        );
        expect(_f64_div_result).toBe(3.5556829803013436e272);
    });

    _test("execution of float_misc_0: f64.div (instance 20)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, 4.03995627001749e54, -4.7097881971884274e64);
        expect(_f64_div_result).toBe(-8.57778757955442e-11);
    });

    _test("execution of float_misc_0: f64.div (instance 21)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(
            _f64_div,
            -2.039595604683476e176,
            -7.474088739461226e58
        );
        expect(_f64_div_result).toBe(2.728888665604071e117);
    });

    _test("execution of float_misc_0: f64.div (instance 22)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(
            _f64_div,
            -3.0426171229468766e164,
            -2.6556792326588243e99
        );
        expect(_f64_div_result).toBe(1.1457020432022042e65);
    });

    _test("execution of float_misc_0: f64.div (instance 23)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, 4.923524051248073e55, -3.663408283100367e290);
        expect(_f64_div_result).toBe(-1.3439736089369927e-235);
    });

    _test("execution of float_misc_0: f64.div (instance 24)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, 2.892608435563416e65, 5.171948758373355e128);
        expect(_f64_div_result).toBe(5.592879146144478e-64);
    });

    _test("execution of float_misc_0: f64.div (instance 25)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(
            _f64_div,
            -4.215425823442686e248,
            1.4285058546706491e105
        );
        expect(_f64_div_result).toBe(-2.9509335293656034e143);
    });

    _test("execution of float_misc_0: f64.div (instance 26)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, 1.8622957433108482, 1.7976931348623157e308);
        expect(_f64_div_result).toBe(1.0359363938125513e-308);
    });

    _test("execution of float_misc_0: f64.div (instance 27)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, 8.566632480779937e-305, 5381.2699796556235);
        expect(_f64_div_result).toBe(1.591935084685746e-308);
    });

    _test("execution of float_misc_0: f64.div (instance 28)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(
            _f64_div,
            -8.196220919495565e-44,
            -1.0406557086484777e265
        );
        expect(_f64_div_result).toBe(7.876015911295176e-309);
    });

    _test("execution of float_misc_0: f64.div (instance 29)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(
            _f64_div,
            -7.052801866447111e-119,
            -1.3767429405781133e190
        );
        expect(_f64_div_result).toBe(5.122816800851397e-309);
    });

    _test("execution of float_misc_0: f64.div (instance 30)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(
            _f64_div,
            2.2655621734165475e-258,
            1.332199329634947e50
        );
        expect(_f64_div_result).toBe(1.7006180103974106e-308);
    });

    _test("execution of float_misc_0: f64.div (instance 31)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, 4.196304106554003e-303, -9789327.297653636);
        expect(_f64_div_result).toBe(-4.2866113053139e-310);
    });

    _test("execution of float_misc_0: f32.div (instance 21)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, 1.0388607849935468e27, 6211079503872.0);
        expect(_f32_div_result).toBe(167259297284096.0);
    });

    _test("execution of float_misc_0: f32.div (instance 22)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(
            _f32_div,
            1.8690329639854072e27,
            -1.1235572810773782e32
        );
        expect(_f32_div_result).toBe(-1.6634960047667846e-5);
    });

    _test("execution of float_misc_0: f32.div (instance 23)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, 3.290747245341552e24, 0.9064788222312927);
        expect(_f32_div_result).toBe(3.6302526524891487e24);
    });

    _test("execution of float_misc_0: f32.div (instance 24)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, -908946.5625, -17034289152.0);
        expect(_f32_div_result).toBe(5.335981768439524e-5);
    });

    _test("execution of float_misc_0: f32.div (instance 25)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(
            _f32_div,
            -2.409247660314223e-13,
            -8.984081163773542e16
        );
        expect(_f32_div_result).toBe(2.6816851671071694e-30);
    });

    _test("execution of float_misc_0: f64.div (instance 32)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(
            _f64_div,
            3.910973045785834e18,
            -8.392730733897136e-260
        );
        expect(_f64_div_result).toBe(-4.6599529638070336e277);
    });

    _test("execution of float_misc_0: f64.div (instance 33)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(
            _f64_div,
            8.379351966732404e-40,
            -2.1077277802048832e-157
        );
        expect(_f64_div_result).toBe(-3.975538039318286e117);
    });

    _test("execution of float_misc_0: f64.div (instance 34)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(
            _f64_div,
            4.561142017854715e201,
            1.5005780677368491e192
        );
        expect(_f64_div_result).toBe(3039589952.6465592);
    });

    _test("execution of float_misc_0: f64.div (instance 35)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, -6.236072401827852e54, 8.31706325046099e232);
        expect(_f64_div_result).toBe(-7.497925907299316e-179);
    });

    _test("execution of float_misc_0: f64.div (instance 36)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(
            _f64_div,
            -9.757271330468098e-263,
            -3.5613812243480865e-195
        );
        expect(_f64_div_result).toBe(2.739743575824061e-68);
    });

    _test("execution of float_misc_0: f64.div (instance 37)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, 1.046256872449641e-17, 1.8150892711657447);
        expect(_f64_div_result).toBe(5.764217160391678e-18);
    });

    _test("execution of float_misc_0: f64.div (instance 38)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(
            _f64_div,
            2.2038268106596436e-31,
            -2.859803943943555e-13
        );
        expect(_f64_div_result).toBe(-7.706216418530616e-19);
    });

    _test("execution of float_misc_0: f64.div (instance 39)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(
            _f64_div,
            7.596539988437179e-13,
            2.1055358831337124e-34
        );
        expect(_f64_div_result).toBe(3.6078891123579866e21);
    });

    _test("execution of float_misc_0: f64.div (instance 40)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, 1.1206961145008669e27, 1.597132338028665e29);
        expect(_f64_div_result).toBe(0.007016927074960728);
    });

    _test("execution of float_misc_0: f64.div (instance 41)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, 0.0006342142502301953, -6391950865520085.0);
        expect(_f64_div_result).toBe(-9.922076429769178e-20);
    });

    _test("execution of float_misc_0: f32.div (instance 26)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(
            _f32_div,
            1.1754943508222875e-38,
            1.1754942106924411e-38
        );
        expect(_f32_div_result).toBe(1.0000001192092896);
    });

    _test("execution of float_misc_0: f32.div (instance 27)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(
            _f32_div,
            1.1754942106924411e-38,
            1.1754943508222875e-38
        );
        expect(_f32_div_result).toBe(0.9999998807907104);
    });

    _test("execution of float_misc_0: f64.div (instance 42)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(
            _f64_div,
            2.2250738585072014e-308,
            2.225073858507201e-308
        );
        expect(_f64_div_result).toBe(1.0000000000000002);
    });

    _test("execution of float_misc_0: f64.div (instance 43)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(
            _f64_div,
            2.225073858507201e-308,
            2.2250738585072014e-308
        );
        expect(_f64_div_result).toBe(0.9999999999999998);
    });

    _test("execution of float_misc_0: f32.div (instance 28)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, 2.3841856489070778e-7, 3.4028234663852886e38);
        expect(_f32_div_result).toBe(0.0);
    });

    _test("execution of float_misc_0: f32.div (instance 29)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, 2.384185791015625e-7, 3.4028234663852886e38);
        expect(_f32_div_result).toBe(1.401298464324817e-45);
    });

    _test("execution of float_misc_0: f64.div (instance 44)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(
            _f64_div,
            4.4408920985006257e-16,
            1.7976931348623157e308
        );
        expect(_f64_div_result).toBe(0.0);
    });

    _test("execution of float_misc_0: f64.div (instance 45)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(
            _f64_div,
            4.440892098500626e-16,
            1.7976931348623157e308
        );
        expect(_f64_div_result).toBe(5e-324);
    });

    _test("execution of float_misc_0: f32.div (instance 30)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, 1.0, 2.938735877055719e-39);
        expect(_f32_div_result).toBe(Infinity);
    });

    _test("execution of float_misc_0: f32.div (instance 31)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, 1.0, 2.938737278354183e-39);
        expect(_f32_div_result).toBe(3.4028220466166163e38);
    });

    _test("execution of float_misc_0: f64.div (instance 46)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, 1.0, 5.562684646268003e-309);
        expect(_f64_div_result).toBe(Infinity);
    });

    _test("execution of float_misc_0: f64.div (instance 47)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, 1.0, 5.56268464626801e-309);
        expect(_f64_div_result).toBe(1.7976931348623143e308);
    });

    _test("execution of float_misc_0: f32.div (instance 32)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, 1.0, 8.507060187143942e37);
        expect(_f32_div_result).toBe(1.1754942106924411e-38);
    });

    _test("execution of float_misc_0: f32.div (instance 33)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, 1.0, 8.507059173023462e37);
        expect(_f32_div_result).toBe(1.1754943508222875e-38);
    });

    _test("execution of float_misc_0: f64.div (instance 48)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, 1.0, 4.494232837155791e307);
        expect(_f64_div_result).toBe(2.225073858507201e-308);
    });

    _test("execution of float_misc_0: f64.div (instance 49)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, 1.0, 4.49423283715579e307);
        expect(_f64_div_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of float_misc_0: f32.div (instance 34)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, 1.0, 3.0);
        expect(_f32_div_result).toBe(0.3333333432674408);
    });

    _test("execution of float_misc_0: f32.div (instance 35)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, 3.0, 9.0);
        expect(_f32_div_result).toBe(0.3333333432674408);
    });

    _test("execution of float_misc_0: f32.div (instance 36)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, 9.0, 27.0);
        expect(_f32_div_result).toBe(0.3333333432674408);
    });

    _test("execution of float_misc_0: f64.div (instance 50)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, 1.0, 3.0);
        expect(_f64_div_result).toBe(0.3333333333333333);
    });

    _test("execution of float_misc_0: f64.div (instance 51)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, 3.0, 9.0);
        expect(_f64_div_result).toBe(0.3333333333333333);
    });

    _test("execution of float_misc_0: f64.div (instance 52)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, 9.0, 27.0);
        expect(_f64_div_result).toBe(0.3333333333333333);
    });

    _test("execution of float_misc_0: f32.div (instance 37)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, 1.0000001192092896, 0.9999999403953552);
        expect(_f32_div_result).toBe(1.000000238418579);
    });

    _test("execution of float_misc_0: f32.div (instance 38)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, 0.9999999403953552, 1.0000001192092896);
        expect(_f32_div_result).toBe(0.9999998211860657);
    });

    _test("execution of float_misc_0: f32.div (instance 39)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, 1.0, 0.9999999403953552);
        expect(_f32_div_result).toBe(1.0000001192092896);
    });

    _test("execution of float_misc_0: f32.div (instance 40)", () => {
        let _f32_div = module.getExport("f32.div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div, 1.0, 1.0000001192092896);
        expect(_f32_div_result).toBe(0.9999998807907104);
    });

    _test("execution of float_misc_0: f64.div (instance 53)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, 1.0000000000000002, 0.9999999999999999);
        expect(_f64_div_result).toBe(1.0000000000000004);
    });

    _test("execution of float_misc_0: f64.div (instance 54)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, 0.9999999999999999, 1.0000000000000002);
        expect(_f64_div_result).toBe(0.9999999999999997);
    });

    _test("execution of float_misc_0: f64.div (instance 55)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, 1.0, 0.9999999999999999);
        expect(_f64_div_result).toBe(1.0000000000000002);
    });

    _test("execution of float_misc_0: f64.div (instance 56)", () => {
        let _f64_div = module.getExport("f64.div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div, 1.0, 1.0000000000000002);
        expect(_f64_div_result).toBe(0.9999999999999998);
    });

    _test("execution of float_misc_0: f32.sqrt (instance 0)", () => {
        let _f32_sqrt = module.getExport("f32.sqrt");
        expect(_f32_sqrt).not.toBeUndefined();
        let _f32_sqrt_result = module.invoke(_f32_sqrt, 171.0);
        expect(_f32_sqrt_result).toBe(13.076696395874023);
    });

    _test("execution of float_misc_0: f32.sqrt (instance 1)", () => {
        let _f32_sqrt = module.getExport("f32.sqrt");
        expect(_f32_sqrt).not.toBeUndefined();
        let _f32_sqrt_result = module.invoke(_f32_sqrt, 1.607949968729372e-7);
        expect(_f32_sqrt_result).toBe(0.00040099251782521605);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 0)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 171.0);
        expect(_f64_sqrt_result).toBe(13.076696830622021);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 1)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 1.60795e-7);
        expect(_f64_sqrt_result).toBe(0.00040099251863345283);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 2)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 4.316357580352844e-50);
        expect(_f64_sqrt_result).toBe(2.0775845543209175e-25);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 3)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 6.762533004796485e101);
        expect(_f64_sqrt_result).toBe(8.223462169181838e50);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 4)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 1.7485296624861996e121);
        expect(_f64_sqrt_result).toBe(4.1815423739168294e60);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 5)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 9.593720960603523e-12);
        expect(_f64_sqrt_result).toBe(3.0973732355987585e-6);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 6)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 6.348452898717835e-112);
        expect(_f64_sqrt_result).toBe(2.519613640762773e-56);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 7)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 0.9999999999999999);
        expect(_f64_sqrt_result).toBe(0.9999999999999999);
    });

    _test("execution of float_misc_0: f32.sqrt (instance 2)", () => {
        let _f32_sqrt = module.getExport("f32.sqrt");
        expect(_f32_sqrt).not.toBeUndefined();
        let _f32_sqrt_result = module.invoke(_f32_sqrt, 0.1296394169330597);
        expect(_f32_sqrt_result).toBe(0.36005473136901855);
    });

    _test("execution of float_misc_0: f32.sqrt (instance 3)", () => {
        let _f32_sqrt = module.getExport("f32.sqrt");
        expect(_f32_sqrt).not.toBeUndefined();
        let _f32_sqrt_result = module.invoke(_f32_sqrt, 2.3458758227068622e30);
        expect(_f32_sqrt_result).toBe(1531625200418816.0);
    });

    _test("execution of float_misc_0: f32.sqrt (instance 4)", () => {
        let _f32_sqrt = module.getExport("f32.sqrt");
        expect(_f32_sqrt).not.toBeUndefined();
        let _f32_sqrt_result = module.invoke(_f32_sqrt, 0.07878657430410385);
        expect(_f32_sqrt_result).toBe(0.28068944811820984);
    });

    _test("execution of float_misc_0: f32.sqrt (instance 5)", () => {
        let _f32_sqrt = module.getExport("f32.sqrt");
        expect(_f32_sqrt).not.toBeUndefined();
        let _f32_sqrt_result = module.invoke(_f32_sqrt, 5.137102604477576e-22);
        expect(_f32_sqrt_result).toBe(2.266517702687043e-11);
    });

    _test("execution of float_misc_0: f32.sqrt (instance 6)", () => {
        let _f32_sqrt = module.getExport("f32.sqrt");
        expect(_f32_sqrt).not.toBeUndefined();
        let _f32_sqrt_result = module.invoke(_f32_sqrt, 0.0009016715339384973);
        expect(_f32_sqrt_result).toBe(0.03002784587442875);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 8)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 9.591922760825561e-279);
        expect(_f64_sqrt_result).toBe(9.793836204892116e-140);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 9)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 9.357875352164005e218);
        expect(_f64_sqrt_result).toBe(3.059064457013615e109);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 10)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 1.4770669978336558e116);
        expect(_f64_sqrt_result).toBe(1.2153464517715332e58);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 11)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 4.880045718002789e31);
        expect(_f64_sqrt_result).toBe(6985732401117859.0);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 12)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 7.61897768717454e300);
        expect(_f64_sqrt_result).toBe(2.760249569726357e150);
    });

    _test("execution of float_misc_0: f32.sqrt (instance 7)", () => {
        let _f32_sqrt = module.getExport("f32.sqrt");
        expect(_f32_sqrt).not.toBeUndefined();
        let _f32_sqrt_result = module.invoke(_f32_sqrt, 154481008.0);
        expect(_f32_sqrt_result).toBe(12429.0390625);
    });

    _test("execution of float_misc_0: f32.sqrt (instance 8)", () => {
        let _f32_sqrt = module.getExport("f32.sqrt");
        expect(_f32_sqrt).not.toBeUndefined();
        let _f32_sqrt_result = module.invoke(_f32_sqrt, 1.047130482506864e-34);
        expect(_f32_sqrt_result).toBe(1.023293968851081e-17);
    });

    _test("execution of float_misc_0: f32.sqrt (instance 9)", () => {
        let _f32_sqrt = module.getExport("f32.sqrt");
        expect(_f32_sqrt).not.toBeUndefined();
        let _f32_sqrt_result = module.invoke(_f32_sqrt, 3.790637128986418e-5);
        expect(_f32_sqrt_result).toBe(0.006156815215945244);
    });

    _test("execution of float_misc_0: f32.sqrt (instance 10)", () => {
        let _f32_sqrt = module.getExport("f32.sqrt");
        expect(_f32_sqrt).not.toBeUndefined();
        let _f32_sqrt_result = module.invoke(_f32_sqrt, 8.960753473528173e-37);
        expect(_f32_sqrt_result).toBe(9.466125683086137e-19);
    });

    _test("execution of float_misc_0: f32.sqrt (instance 11)", () => {
        let _f32_sqrt = module.getExport("f32.sqrt");
        expect(_f32_sqrt).not.toBeUndefined();
        let _f32_sqrt_result = module.invoke(_f32_sqrt, 1.6877119874218322e-37);
        expect(_f32_sqrt_result).toBe(4.108177261102068e-19);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 13)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 3.169962643789095e209);
        expect(_f64_sqrt_result).toBe(5.630242129597177e104);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 14)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 4.0573669271847993e-230);
        expect(_f64_sqrt_result).toBe(2.0142906759414837e-115);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 15)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 1.5299861660588838e-9);
        expect(_f64_sqrt_result).toBe(3.911503759500793e-5);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 16)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 2.822766928951239e-73);
        expect(_f64_sqrt_result).toBe(5.312971794533864e-37);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 17)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 1.4375957727045067e280);
        expect(_f64_sqrt_result).toBe(1.1989978201416826e140);
    });

    _test("execution of float_misc_0: f32.sqrt (instance 12)", () => {
        let _f32_sqrt = module.getExport("f32.sqrt");
        expect(_f32_sqrt).not.toBeUndefined();
        let _f32_sqrt_result = module.invoke(_f32_sqrt, 4.6402342298538086e35);
        expect(_f32_sqrt_result).toBe(6.811926708229243e17);
    });

    _test("execution of float_misc_0: f32.sqrt (instance 13)", () => {
        let _f32_sqrt = module.getExport("f32.sqrt");
        expect(_f32_sqrt).not.toBeUndefined();
        let _f32_sqrt_result = module.invoke(_f32_sqrt, 47536.1328125);
        expect(_f32_sqrt_result).toBe(218.02783203125);
    });

    _test("execution of float_misc_0: f32.sqrt (instance 14)", () => {
        let _f32_sqrt = module.getExport("f32.sqrt");
        expect(_f32_sqrt).not.toBeUndefined();
        let _f32_sqrt_result = module.invoke(_f32_sqrt, 0.8126130104064941);
        expect(_f32_sqrt_result).toBe(0.901450514793396);
    });

    _test("execution of float_misc_0: f32.sqrt (instance 15)", () => {
        let _f32_sqrt = module.getExport("f32.sqrt");
        expect(_f32_sqrt).not.toBeUndefined();
        let _f32_sqrt_result = module.invoke(_f32_sqrt, 9.549604991959535e-27);
        expect(_f32_sqrt_result).toBe(9.772208270451138e-14);
    });

    _test("execution of float_misc_0: f32.sqrt (instance 16)", () => {
        let _f32_sqrt = module.getExport("f32.sqrt");
        expect(_f32_sqrt).not.toBeUndefined();
        let _f32_sqrt_result = module.invoke(_f32_sqrt, 6.885648533602653e-29);
        expect(_f32_sqrt_result).toBe(8.297981137666329e-15);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 18)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 2.3497689174953322e222);
        expect(_f64_sqrt_result).toBe(1.532895599020146e111);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 19)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 2.9262574743429683e-115);
        expect(_f64_sqrt_result).toBe(5.409489323718985e-58);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 20)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 3.773350874844908e290);
        expect(_f64_sqrt_result).toBe(1.942511486412605e145);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 21)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 3.5498432023945234e-14);
        expect(_f64_sqrt_result).toBe(1.8841027579180822e-7);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 22)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 1.3747419336166767e-148);
        expect(_f64_sqrt_result).toBe(1.1724938949165905e-74);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 23)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, -1.5535152663257847e-290);
        expect(_f64_sqrt_result).toBe(NaN);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 24)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 1.87632963480297e31);
        expect(_f64_sqrt_result).toBe(4331662076851067.0);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 25)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 2.74405777036165e-229);
        expect(_f64_sqrt_result).toBe(5.23837548325972e-115);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 26)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 1.5613859952920445e-83);
        expect(_f64_sqrt_result).toBe(3.9514377070783294e-42);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 27)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 6.193037689450712e170);
        expect(_f64_sqrt_result).toBe(2.4885814612848646e85);
    });

    _test("execution of float_misc_0: f32.sqrt (instance 17)", () => {
        let _f32_sqrt = module.getExport("f32.sqrt");
        expect(_f32_sqrt).not.toBeUndefined();
        let _f32_sqrt_result = module.invoke(_f32_sqrt, 1.0000001192092896);
        expect(_f32_sqrt_result).toBe(1.0);
    });

    _test("execution of float_misc_0: f32.sqrt (instance 18)", () => {
        let _f32_sqrt = module.getExport("f32.sqrt");
        expect(_f32_sqrt).not.toBeUndefined();
        let _f32_sqrt_result = module.invoke(_f32_sqrt, 1.000000238418579);
        expect(_f32_sqrt_result).toBe(1.0000001192092896);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 28)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 1.0000000000000002);
        expect(_f64_sqrt_result).toBe(1.0);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 29)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 1.0000000000000004);
        expect(_f64_sqrt_result).toBe(1.0000000000000002);
    });

    _test("execution of float_misc_0: f32.sqrt (instance 19)", () => {
        let _f32_sqrt = module.getExport("f32.sqrt");
        expect(_f32_sqrt).not.toBeUndefined();
        let _f32_sqrt_result = module.invoke(_f32_sqrt, 0.9999998807907104);
        expect(_f32_sqrt_result).toBe(0.9999999403953552);
    });

    _test("execution of float_misc_0: f32.sqrt (instance 20)", () => {
        let _f32_sqrt = module.getExport("f32.sqrt");
        expect(_f32_sqrt).not.toBeUndefined();
        let _f32_sqrt_result = module.invoke(_f32_sqrt, 0.9999998211860657);
        expect(_f32_sqrt_result).toBe(0.9999998807907104);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 30)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 0.9999999999999998);
        expect(_f64_sqrt_result).toBe(0.9999999999999999);
    });

    _test("execution of float_misc_0: f64.sqrt (instance 31)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 0.9999999999999997);
        expect(_f64_sqrt_result).toBe(0.9999999999999998);
    });

    _test("execution of float_misc_0: f32.abs (instance 0)", () => {
        let _f32_abs = module.getExport("f32.abs");
        expect(_f32_abs).not.toBeUndefined();
        let _f32_abs_result = module.invoke(_f32_abs, NaN);
        expect(_f32_abs_result).toBe(NaN);
    });

    _test("execution of float_misc_0: f32.abs (instance 1)", () => {
        let _f32_abs = module.getExport("f32.abs");
        expect(_f32_abs).not.toBeUndefined();
        let _f32_abs_result = module.invoke(_f32_abs, -NaN);
        expect(_f32_abs_result).toBe(NaN);
    });

    _test("execution of float_misc_0: f64.abs (instance 0)", () => {
        let _f64_abs = module.getExport("f64.abs");
        expect(_f64_abs).not.toBeUndefined();
        let _f64_abs_result = module.invoke(_f64_abs, NaN);
        expect(_f64_abs_result).toBe(NaN);
    });

    _test("execution of float_misc_0: f64.abs (instance 1)", () => {
        let _f64_abs = module.getExport("f64.abs");
        expect(_f64_abs).not.toBeUndefined();
        let _f64_abs_result = module.invoke(_f64_abs, -NaN);
        expect(_f64_abs_result).toBe(NaN);
    });

    _test("execution of float_misc_0: f32.neg (instance 0)", () => {
        let _f32_neg = module.getExport("f32.neg");
        expect(_f32_neg).not.toBeUndefined();
        let _f32_neg_result = module.invoke(_f32_neg, NaN);
        expect(_f32_neg_result).toBe(-NaN);
    });

    _test("execution of float_misc_0: f32.neg (instance 1)", () => {
        let _f32_neg = module.getExport("f32.neg");
        expect(_f32_neg).not.toBeUndefined();
        let _f32_neg_result = module.invoke(_f32_neg, -NaN);
        expect(_f32_neg_result).toBe(NaN);
    });

    _test("execution of float_misc_0: f64.neg (instance 0)", () => {
        let _f64_neg = module.getExport("f64.neg");
        expect(_f64_neg).not.toBeUndefined();
        let _f64_neg_result = module.invoke(_f64_neg, NaN);
        expect(_f64_neg_result).toBe(-NaN);
    });

    _test("execution of float_misc_0: f64.neg (instance 1)", () => {
        let _f64_neg = module.getExport("f64.neg");
        expect(_f64_neg).not.toBeUndefined();
        let _f64_neg_result = module.invoke(_f64_neg, -NaN);
        expect(_f64_neg_result).toBe(NaN);
    });

    _test("execution of float_misc_0: f32.copysign (instance 0)", () => {
        let _f32_copysign = module.getExport("f32.copysign");
        expect(_f32_copysign).not.toBeUndefined();
        let _f32_copysign_result = module.invoke(_f32_copysign, NaN, NaN);
        expect(_f32_copysign_result).toBe(NaN);
    });

    _test("execution of float_misc_0: f32.copysign (instance 1)", () => {
        let _f32_copysign = module.getExport("f32.copysign");
        expect(_f32_copysign).not.toBeUndefined();
        let _f32_copysign_result = module.invoke(_f32_copysign, NaN, -NaN);
        expect(_f32_copysign_result).toBe(-NaN);
    });

    _test("execution of float_misc_0: f32.copysign (instance 2)", () => {
        let _f32_copysign = module.getExport("f32.copysign");
        expect(_f32_copysign).not.toBeUndefined();
        let _f32_copysign_result = module.invoke(_f32_copysign, -NaN, NaN);
        expect(_f32_copysign_result).toBe(NaN);
    });

    _test("execution of float_misc_0: f32.copysign (instance 3)", () => {
        let _f32_copysign = module.getExport("f32.copysign");
        expect(_f32_copysign).not.toBeUndefined();
        let _f32_copysign_result = module.invoke(_f32_copysign, -NaN, -NaN);
        expect(_f32_copysign_result).toBe(-NaN);
    });

    _test("execution of float_misc_0: f64.copysign (instance 0)", () => {
        let _f64_copysign = module.getExport("f64.copysign");
        expect(_f64_copysign).not.toBeUndefined();
        let _f64_copysign_result = module.invoke(_f64_copysign, NaN, NaN);
        expect(_f64_copysign_result).toBe(NaN);
    });

    _test("execution of float_misc_0: f64.copysign (instance 1)", () => {
        let _f64_copysign = module.getExport("f64.copysign");
        expect(_f64_copysign).not.toBeUndefined();
        let _f64_copysign_result = module.invoke(_f64_copysign, NaN, -NaN);
        expect(_f64_copysign_result).toBe(-NaN);
    });

    _test("execution of float_misc_0: f64.copysign (instance 2)", () => {
        let _f64_copysign = module.getExport("f64.copysign");
        expect(_f64_copysign).not.toBeUndefined();
        let _f64_copysign_result = module.invoke(_f64_copysign, -NaN, NaN);
        expect(_f64_copysign_result).toBe(NaN);
    });

    _test("execution of float_misc_0: f64.copysign (instance 3)", () => {
        let _f64_copysign = module.getExport("f64.copysign");
        expect(_f64_copysign).not.toBeUndefined();
        let _f64_copysign_result = module.invoke(_f64_copysign, -NaN, -NaN);
        expect(_f64_copysign_result).toBe(-NaN);
    });

    _test("execution of float_misc_0: f32.ceil (instance 0)", () => {
        let _f32_ceil = module.getExport("f32.ceil");
        expect(_f32_ceil).not.toBeUndefined();
        let _f32_ceil_result = module.invoke(_f32_ceil, 0.9999999403953552);
        expect(_f32_ceil_result).toBe(1.0);
    });

    _test("execution of float_misc_0: f32.ceil (instance 1)", () => {
        let _f32_ceil = module.getExport("f32.ceil");
        expect(_f32_ceil).not.toBeUndefined();
        let _f32_ceil_result = module.invoke(_f32_ceil, 1.0000001192092896);
        expect(_f32_ceil_result).toBe(2.0);
    });

    _test("execution of float_misc_0: f64.ceil (instance 0)", () => {
        let _f64_ceil = module.getExport("f64.ceil");
        expect(_f64_ceil).not.toBeUndefined();
        let _f64_ceil_result = module.invoke(_f64_ceil, 0.9999999999999999);
        expect(_f64_ceil_result).toBe(1.0);
    });

    _test("execution of float_misc_0: f64.ceil (instance 1)", () => {
        let _f64_ceil = module.getExport("f64.ceil");
        expect(_f64_ceil).not.toBeUndefined();
        let _f64_ceil_result = module.invoke(_f64_ceil, 1.0000000000000002);
        expect(_f64_ceil_result).toBe(2.0);
    });

    _test("execution of float_misc_0: f32.ceil (instance 2)", () => {
        let _f32_ceil = module.getExport("f32.ceil");
        expect(_f32_ceil).not.toBeUndefined();
        let _f32_ceil_result = module.invoke(_f32_ceil, 8388607.5);
        expect(_f32_ceil_result).toBe(8388608.0);
    });

    _test("execution of float_misc_0: f32.ceil (instance 3)", () => {
        let _f32_ceil = module.getExport("f32.ceil");
        expect(_f32_ceil).not.toBeUndefined();
        let _f32_ceil_result = module.invoke(_f32_ceil, -8388607.5);
        expect(_f32_ceil_result).toBe(-8388607.0);
    });

    _test("execution of float_misc_0: f64.ceil (instance 2)", () => {
        let _f64_ceil = module.getExport("f64.ceil");
        expect(_f64_ceil).not.toBeUndefined();
        let _f64_ceil_result = module.invoke(_f64_ceil, 4503599627370495.5);
        expect(_f64_ceil_result).toBe(4503599627370496.0);
    });

    _test("execution of float_misc_0: f64.ceil (instance 3)", () => {
        let _f64_ceil = module.getExport("f64.ceil");
        expect(_f64_ceil).not.toBeUndefined();
        let _f64_ceil_result = module.invoke(_f64_ceil, -4503599627370495.5);
        expect(_f64_ceil_result).toBe(-4503599627370495.0);
    });

    _test("execution of float_misc_0: f32.ceil (instance 4)", () => {
        let _f32_ceil = module.getExport("f32.ceil");
        expect(_f32_ceil).not.toBeUndefined();
        let _f32_ceil_result = module.invoke(_f32_ceil, 16777215.0);
        expect(_f32_ceil_result).toBe(16777215.0);
    });

    _test("execution of float_misc_0: f32.ceil (instance 5)", () => {
        let _f32_ceil = module.getExport("f32.ceil");
        expect(_f32_ceil).not.toBeUndefined();
        let _f32_ceil_result = module.invoke(_f32_ceil, -16777215.0);
        expect(_f32_ceil_result).toBe(-16777215.0);
    });

    _test("execution of float_misc_0: f64.ceil (instance 4)", () => {
        let _f64_ceil = module.getExport("f64.ceil");
        expect(_f64_ceil).not.toBeUndefined();
        let _f64_ceil_result = module.invoke(_f64_ceil, 9007199254740991.0);
        expect(_f64_ceil_result).toBe(9007199254740991.0);
    });

    _test("execution of float_misc_0: f64.ceil (instance 5)", () => {
        let _f64_ceil = module.getExport("f64.ceil");
        expect(_f64_ceil).not.toBeUndefined();
        let _f64_ceil_result = module.invoke(_f64_ceil, -9007199254740991.0);
        expect(_f64_ceil_result).toBe(-9007199254740991.0);
    });

    _test("execution of float_misc_0: f32.floor (instance 0)", () => {
        let _f32_floor = module.getExport("f32.floor");
        expect(_f32_floor).not.toBeUndefined();
        let _f32_floor_result = module.invoke(_f32_floor, -0.9999999403953552);
        expect(_f32_floor_result).toBe(-1.0);
    });

    _test("execution of float_misc_0: f32.floor (instance 1)", () => {
        let _f32_floor = module.getExport("f32.floor");
        expect(_f32_floor).not.toBeUndefined();
        let _f32_floor_result = module.invoke(_f32_floor, -1.0000001192092896);
        expect(_f32_floor_result).toBe(-2.0);
    });

    _test("execution of float_misc_0: f64.floor (instance 0)", () => {
        let _f64_floor = module.getExport("f64.floor");
        expect(_f64_floor).not.toBeUndefined();
        let _f64_floor_result = module.invoke(_f64_floor, -0.9999999999999999);
        expect(_f64_floor_result).toBe(-1.0);
    });

    _test("execution of float_misc_0: f64.floor (instance 1)", () => {
        let _f64_floor = module.getExport("f64.floor");
        expect(_f64_floor).not.toBeUndefined();
        let _f64_floor_result = module.invoke(_f64_floor, -1.0000000000000002);
        expect(_f64_floor_result).toBe(-2.0);
    });

    _test("execution of float_misc_0: f32.floor (instance 2)", () => {
        let _f32_floor = module.getExport("f32.floor");
        expect(_f32_floor).not.toBeUndefined();
        let _f32_floor_result = module.invoke(_f32_floor, -8388607.5);
        expect(_f32_floor_result).toBe(-8388608.0);
    });

    _test("execution of float_misc_0: f32.floor (instance 3)", () => {
        let _f32_floor = module.getExport("f32.floor");
        expect(_f32_floor).not.toBeUndefined();
        let _f32_floor_result = module.invoke(_f32_floor, 8388607.5);
        expect(_f32_floor_result).toBe(8388607.0);
    });

    _test("execution of float_misc_0: f64.floor (instance 2)", () => {
        let _f64_floor = module.getExport("f64.floor");
        expect(_f64_floor).not.toBeUndefined();
        let _f64_floor_result = module.invoke(_f64_floor, -4503599627370495.5);
        expect(_f64_floor_result).toBe(-4503599627370496.0);
    });

    _test("execution of float_misc_0: f64.floor (instance 3)", () => {
        let _f64_floor = module.getExport("f64.floor");
        expect(_f64_floor).not.toBeUndefined();
        let _f64_floor_result = module.invoke(_f64_floor, 4503599627370495.5);
        expect(_f64_floor_result).toBe(4503599627370495.0);
    });

    _test("execution of float_misc_0: f32.floor (instance 4)", () => {
        let _f32_floor = module.getExport("f32.floor");
        expect(_f32_floor).not.toBeUndefined();
        let _f32_floor_result = module.invoke(_f32_floor, 88607.0);
        expect(_f32_floor_result).toBe(88607.0);
    });

    _test("execution of float_misc_0: f64.floor (instance 4)", () => {
        let _f64_floor = module.getExport("f64.floor");
        expect(_f64_floor).not.toBeUndefined();
        let _f64_floor_result = module.invoke(_f64_floor, 88607.0);
        expect(_f64_floor_result).toBe(88607.0);
    });

    _test("execution of float_misc_0: f32.trunc (instance 0)", () => {
        let _f32_trunc = module.getExport("f32.trunc");
        expect(_f32_trunc).not.toBeUndefined();
        let _f32_trunc_result = module.invoke(_f32_trunc, -8388607.5);
        expect(_f32_trunc_result).toBe(-8388607.0);
    });

    _test("execution of float_misc_0: f32.trunc (instance 1)", () => {
        let _f32_trunc = module.getExport("f32.trunc");
        expect(_f32_trunc).not.toBeUndefined();
        let _f32_trunc_result = module.invoke(_f32_trunc, 8388607.5);
        expect(_f32_trunc_result).toBe(8388607.0);
    });

    _test("execution of float_misc_0: f64.trunc (instance 0)", () => {
        let _f64_trunc = module.getExport("f64.trunc");
        expect(_f64_trunc).not.toBeUndefined();
        let _f64_trunc_result = module.invoke(_f64_trunc, -4503599627370495.5);
        expect(_f64_trunc_result).toBe(-4503599627370495.0);
    });

    _test("execution of float_misc_0: f64.trunc (instance 1)", () => {
        let _f64_trunc = module.getExport("f64.trunc");
        expect(_f64_trunc).not.toBeUndefined();
        let _f64_trunc_result = module.invoke(_f64_trunc, 4503599627370495.5);
        expect(_f64_trunc_result).toBe(4503599627370495.0);
    });

    _test("execution of float_misc_0: f32.nearest (instance 0)", () => {
        let _f32_nearest = module.getExport("f32.nearest");
        expect(_f32_nearest).not.toBeUndefined();
        let _f32_nearest_result = module.invoke(_f32_nearest, 8388609.0);
        expect(_f32_nearest_result).toBe(8388609.0);
    });

    _test("execution of float_misc_0: f32.nearest (instance 1)", () => {
        let _f32_nearest = module.getExport("f32.nearest");
        expect(_f32_nearest).not.toBeUndefined();
        let _f32_nearest_result = module.invoke(_f32_nearest, 8388610.0);
        expect(_f32_nearest_result).toBe(8388610.0);
    });

    _test("execution of float_misc_0: f32.nearest (instance 2)", () => {
        let _f32_nearest = module.getExport("f32.nearest");
        expect(_f32_nearest).not.toBeUndefined();
        let _f32_nearest_result = module.invoke(_f32_nearest, 0.4999999701976776);
        expect(_f32_nearest_result).toBe(0.0);
    });

    _test("execution of float_misc_0: f32.nearest (instance 3)", () => {
        let _f32_nearest = module.getExport("f32.nearest");
        expect(_f32_nearest).not.toBeUndefined();
        let _f32_nearest_result = module.invoke(_f32_nearest, 281474959933440.0);
        expect(_f32_nearest_result).toBe(281474959933440.0);
    });

    _test("execution of float_misc_0: f64.nearest (instance 0)", () => {
        let _f64_nearest = module.getExport("f64.nearest");
        expect(_f64_nearest).not.toBeUndefined();
        let _f64_nearest_result = module.invoke(_f64_nearest, 4503599627370497.0);
        expect(_f64_nearest_result).toBe(4503599627370497.0);
    });

    _test("execution of float_misc_0: f64.nearest (instance 1)", () => {
        let _f64_nearest = module.getExport("f64.nearest");
        expect(_f64_nearest).not.toBeUndefined();
        let _f64_nearest_result = module.invoke(_f64_nearest, 4503599627370498.0);
        expect(_f64_nearest_result).toBe(4503599627370498.0);
    });

    _test("execution of float_misc_0: f64.nearest (instance 2)", () => {
        let _f64_nearest = module.getExport("f64.nearest");
        expect(_f64_nearest).not.toBeUndefined();
        let _f64_nearest_result = module.invoke(_f64_nearest, 0.49999999999999994);
        expect(_f64_nearest_result).toBe(0.0);
    });

    _test("execution of float_misc_0: f64.nearest (instance 3)", () => {
        let _f64_nearest = module.getExport("f64.nearest");
        expect(_f64_nearest).not.toBeUndefined();
        let _f64_nearest_result = module.invoke(_f64_nearest, 8.112963841460667e31);
        expect(_f64_nearest_result).toBe(8.112963841460667e31);
    });

    _test("execution of float_misc_0: f32.nearest (instance 4)", () => {
        let _f32_nearest = module.getExport("f32.nearest");
        expect(_f32_nearest).not.toBeUndefined();
        let _f32_nearest_result = module.invoke(_f32_nearest, 4.5);
        expect(_f32_nearest_result).toBe(4.0);
    });

    _test("execution of float_misc_0: f32.nearest (instance 5)", () => {
        let _f32_nearest = module.getExport("f32.nearest");
        expect(_f32_nearest).not.toBeUndefined();
        let _f32_nearest_result = module.invoke(_f32_nearest, -4.5);
        expect(_f32_nearest_result).toBe(-4.0);
    });

    _test("execution of float_misc_0: f32.nearest (instance 6)", () => {
        let _f32_nearest = module.getExport("f32.nearest");
        expect(_f32_nearest).not.toBeUndefined();
        let _f32_nearest_result = module.invoke(_f32_nearest, -3.5);
        expect(_f32_nearest_result).toBe(-4.0);
    });

    _test("execution of float_misc_0: f64.nearest (instance 4)", () => {
        let _f64_nearest = module.getExport("f64.nearest");
        expect(_f64_nearest).not.toBeUndefined();
        let _f64_nearest_result = module.invoke(_f64_nearest, 4.5);
        expect(_f64_nearest_result).toBe(4.0);
    });

    _test("execution of float_misc_0: f64.nearest (instance 5)", () => {
        let _f64_nearest = module.getExport("f64.nearest");
        expect(_f64_nearest).not.toBeUndefined();
        let _f64_nearest_result = module.invoke(_f64_nearest, -4.5);
        expect(_f64_nearest_result).toBe(-4.0);
    });

    _test("execution of float_misc_0: f64.nearest (instance 6)", () => {
        let _f64_nearest = module.getExport("f64.nearest");
        expect(_f64_nearest).not.toBeUndefined();
        let _f64_nearest_result = module.invoke(_f64_nearest, -3.5);
        expect(_f64_nearest_result).toBe(-4.0);
    });

    _test("execution of float_misc_0: f32.nearest (instance 7)", () => {
        let _f32_nearest = module.getExport("f32.nearest");
        expect(_f32_nearest).not.toBeUndefined();
        let _f32_nearest_result = module.invoke(_f32_nearest, -8388607.5);
        expect(_f32_nearest_result).toBe(-8388608.0);
    });

    _test("execution of float_misc_0: f32.nearest (instance 8)", () => {
        let _f32_nearest = module.getExport("f32.nearest");
        expect(_f32_nearest).not.toBeUndefined();
        let _f32_nearest_result = module.invoke(_f32_nearest, 8388607.5);
        expect(_f32_nearest_result).toBe(8388608.0);
    });

    _test("execution of float_misc_0: f64.nearest (instance 7)", () => {
        let _f64_nearest = module.getExport("f64.nearest");
        expect(_f64_nearest).not.toBeUndefined();
        let _f64_nearest_result = module.invoke(_f64_nearest, -4503599627370495.5);
        expect(_f64_nearest_result).toBe(-4503599627370496.0);
    });

    _test("execution of float_misc_0: f64.nearest (instance 8)", () => {
        let _f64_nearest = module.getExport("f64.nearest");
        expect(_f64_nearest).not.toBeUndefined();
        let _f64_nearest_result = module.invoke(_f64_nearest, 4503599627370495.5);
        expect(_f64_nearest_result).toBe(4503599627370496.0);
    });
});
