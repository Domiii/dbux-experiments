const o = null;
// o === null || o === void 0 ? void 0 : o.f()
o?.f();
// o.g();

// npx dbux i ./src/test2.js