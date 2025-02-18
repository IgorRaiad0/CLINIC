import express from "express";
const router = express.Router();
import Controllers from "../controllers/admController.js";


// Rotas Pacientes
router.get('/', Controllers.paciente.index);
router.get('/cadastroPaciente', Controllers.paciente.cadastro);
router.post('/salvarPaciente', Controllers.paciente.salvar);
router.get('/listagemPacientes', Controllers.paciente.listagem);
router.get('/editarPaciente/:id', Controllers.paciente.editarPaciente);
router.post('/atualizarPaciente/:id', Controllers.paciente.atualizarPaciente);
router.post('/apagarPaciente/:id', Controllers.paciente.apagarPaciente);

// Rotas Médicos
router.get('/cadastroMedico', Controllers.medico.cadastro);
router.post('/salvarMedico', Controllers.medico.salvar);
router.get('/listagemMedicos', Controllers.medico.listagem);
router.get('/editarMedico/:id', Controllers.medico.editarMedico);
router.post('/editarMedico/:id', Controllers.medico.atualizarMedico);
router.post('/apagarMedico/:id', Controllers.medico.apagarMedico);




export default router;