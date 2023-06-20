const {
    getAll,
    create,
    getOne,
    remove,
    update,
    verifyCode,
    login,
    logged,
    resetPassword,
    updatePassword,
} = require("../controllers/user.controlles");
const express = require("express");
const verifyJWT = require("../utils/verifyJWT");

const routerUser = express.Router();

routerUser
    .route("/")
    .get(verifyJWT, getAll) // Leer todos
    .post(create); // crear

routerUser.route("/login").post(login); // crear login

routerUser
    .route("/me") // /users/me
    .get(verifyJWT, logged); //Leer

routerUser
    .route("/reset_password") // /users/reset_password
    .post(resetPassword); // crear

routerUser
    .route("/:id")
    .get(verifyJWT, getOne) // leer indi
    .delete(verifyJWT, remove) // borrar
    .put(verifyJWT, update); // actualizar

routerUser.route("/verify/:code").get(verifyCode); // Leer ver

routerUser
    .route("/reset_password/:code") // /reset_password/:code
    .post(updatePassword); // crear

module.exports = routerUser;
