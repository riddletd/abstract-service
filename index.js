"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class AbstractService {
    constructor() {
        this.source = new rxjs_1.Subject();
        this.current = this.source.asObservable();
    }
    change(data) {
        this.source.next(data);
    }
}
exports.AbstractService = AbstractService;
