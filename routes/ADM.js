import express from "express";
const router = express.Router();
import PacienteController from "../controllers/pacienteController.js";
import MedicoController from "../controllers/medicoController.js";
import admController from "../controllers/admController.js";


// Rotas PacientesAdm
router.get('/index', admController.index);
router.get('/cadastroPaciente', PacienteController.cadastro);
router.post('/salvarPaciente', PacienteController.salvar);
router.get('/listagemPacientes', PacienteController.listagem);
router.get('/editarPaciente/:id', PacienteController.editarPaciente);
router.post('/atualizarPaciente/:id', PacienteController.atualizarPaciente);
router.post('/apagarPaciente/:id', PacienteController.apagarPaciente);

// Rotas MédicosADM
router.get('/cadastroMedico', MedicoController.cadastroMedico);
router.post('/salvarMedico', MedicoController.salvarMedico);
router.get('/listagemMedicos', MedicoController.listagemMedico);
router.get('/editarMedico/:id', MedicoController.editarMedico);
router.post('/editarMedico/:id', MedicoController.atualizarMedico);
router.post('/apagarMedico/:id', MedicoController.apagarMedico);




export default router;