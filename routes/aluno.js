import express from "express";
const router = express.Router();
import AlunoController from "../controllers/alunoController.js";

router.get('/', AlunoController.index);
router.get('/cadastro', AlunoController.cadastro);
router.post('/salvar', AlunoController.salvar);
router.get('/listagem', AlunoController.listagem);

export default router;