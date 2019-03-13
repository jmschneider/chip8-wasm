(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/chip8_wasm.js":
/*!****************************!*\
  !*** ../pkg/chip8_wasm.js ***!
  \****************************/
/*! exports provided: Emulator, __wbindgen_object_drop_ref, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Emulator\", function() { return Emulator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _chip8_wasm_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chip8_wasm_bg */ \"../pkg/chip8_wasm_bg.wasm\");\n/* tslint:disable */\n\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _chip8_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_chip8_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nfunction passArray8ToWasm(arg) {\n    const ptr = _chip8_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](arg.length * 1);\n    getUint8Memory().set(arg, ptr / 1);\n    WASM_VECTOR_LEN = arg.length;\n    return ptr;\n}\n\nfunction freeEmulator(ptr) {\n\n    _chip8_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_emulator_free\"](ptr);\n}\n/**\n*/\nclass Emulator {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Emulator.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n        freeEmulator(ptr);\n    }\n\n    /**\n    * @returns {Emulator}\n    */\n    static new() {\n        return Emulator.__wrap(_chip8_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"emulator_new\"]());\n    }\n    /**\n    * @returns {void}\n    */\n    tick() {\n        return _chip8_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"emulator_tick\"](this.ptr);\n    }\n    /**\n    * @param {Uint8Array} arg0\n    * @returns {void}\n    */\n    load(arg0) {\n        const ptr0 = passArray8ToWasm(arg0);\n        const len0 = WASM_VECTOR_LEN;\n        try {\n            return _chip8_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"emulator_load\"](this.ptr, ptr0, len0);\n\n        } finally {\n            _chip8_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](ptr0, len0 * 1);\n\n        }\n\n    }\n    /**\n    * @returns {number}\n    */\n    height() {\n        return _chip8_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"emulator_height\"](this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        return _chip8_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"emulator_width\"](this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    pixels() {\n        return _chip8_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"emulator_pixels\"](this.ptr);\n    }\n}\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction __wbindgen_object_drop_ref(i) { dropObject(i); }\n\nlet cachedTextDecoder = new TextDecoder('utf-8');\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\n\n\n//# sourceURL=webpack:///../pkg/chip8_wasm.js?");

/***/ }),

/***/ "../pkg/chip8_wasm_bg.wasm":
/*!*********************************!*\
  !*** ../pkg/chip8_wasm_bg.wasm ***!
  \*********************************/
/*! exports provided: memory, __wbg_emulator_free, emulator_new, emulator_tick, emulator_load, emulator_height, emulator_width, emulator_pixels, __wbindgen_malloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./chip8_wasm */ \"../pkg/chip8_wasm.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/chip8_wasm_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chip8_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chip8-wasm */ \"../pkg/chip8_wasm.js\");\n/* harmony import */ var chip8_wasm_chip8_wasm_bg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chip8-wasm/chip8_wasm_bg */ \"../pkg/chip8_wasm_bg.wasm\");\n\n\n\nconst PIXEL_SIZE = 20,\n  ON_COLOR = '#00CCCC',\n  OFF_COLOR = '#000000',\n  emulator = chip8_wasm__WEBPACK_IMPORTED_MODULE_0__[\"Emulator\"].new(),\n  height = emulator.height(),\n  width = emulator.width(),\n  canvas = document.getElementById('emulator')\n\ncanvas.height = (PIXEL_SIZE + 1) * height + 1\ncanvas.width = (PIXEL_SIZE + 1) * width + 1\n\nconst ctx = canvas.getContext('2d')\n\nfetch(`roms/SPACE_INVADERS`)\n  .then(i => i.arrayBuffer())\n  .then(buffer => {\n    let rom = new Uint8Array(buffer, 0, buffer.byteLength)\n    emulator.load(rom)\n    tick()\n})\n\nfunction tick() {\n  for(let i = 0; i <= 9; i++) {\n    emulator.tick()\n  }\n  drawCells()\n\n  requestAnimationFrame(tick)\n}\n\nconst getIndex = (row, column) => {\n  return row * width + column\n}\n\nfunction drawCells() {\n  const cellsPtr = emulator.pixels()\n  const cells = new Uint8Array(chip8_wasm_chip8_wasm_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, cellsPtr, width * height)\n\n  ctx.beginPath()\n\n  for (let row = 0; row < height; row++) {\n    for (let col = 0; col < width; col++) {\n      const idx = getIndex(row, col)\n\n      ctx.fillStyle = cells[idx] === 0 ? OFF_COLOR : ON_COLOR\n\n      ctx.fillRect(\n        col * PIXEL_SIZE,\n        row * PIXEL_SIZE,\n        PIXEL_SIZE,\n        PIXEL_SIZE\n      )\n    }\n  }\n\n  ctx.stroke()\n}\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);