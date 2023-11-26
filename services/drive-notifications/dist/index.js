"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
const app = (0, express_1.default)();
app
    .use(express_1.default.json())
    .listen(PORT, () => {
    console.log('Server listening...');
});
app.get('/status', (req, res) => {
    res.send({
        "status": "OK"
    });
});
app.post('/sheet-notifications', (req, resp) => {
    resp.send(req.body);
});
exports.default = app;
//# sourceMappingURL=index.js.map