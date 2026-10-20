const express = require("express");

const router = express.router();

const usuarioController =
require("../controllers/UsuarioController");

router.post(
    "/usuarios",
    usuarioController.criarUsuario
);

router.get(
    "/usuarios",
    usuarioController.consultarUsuarios
);

router.post(
    "/login",
    usuarioController.loginUsuario
);

Module.exports = router;