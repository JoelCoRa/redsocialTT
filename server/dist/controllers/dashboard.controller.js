"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboard = void 0;
const getDashboard = (req, res) => {
    res.json({
        msg: 'Acceso autorizado al dashboard.'
    });
};
exports.getDashboard = getDashboard;
