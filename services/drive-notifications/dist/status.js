"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
// Not working yet
// maybe route ?
_1.default.get('/status', (req, res) => {
    res.status(200).json({
        databaseConnection: 'Healty'
    });
});
//# sourceMappingURL=status.js.map