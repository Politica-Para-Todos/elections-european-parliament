"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.definedAppPort = void 0;
function definedAppPort() {
    if (!process.env.EXPRESS_PORT) {
        throw new Error('App port is not defined. Please provide a port as an env variable.');
    }
    return Number(process.env.EXPRESS_PORT);
}
exports.definedAppPort = definedAppPort;
//# sourceMappingURL=config.js.map