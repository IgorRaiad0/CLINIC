import Aluno from "../models/Aluno.js";

class AlunoController { 
    index = async (req, res) => {
        const alunos = await Aluno.findAll();
        res.render('aluno/index', { alunos });        
    };

cadastro = async (req, res) => {
    res.render('aluno/cadastro');  

}
salvar = async (req, res) => {
    console.log(req.body);

    let primeiraNota = Number(req.body.primeiraNota);
    let segundaNota = Number(req.body.segundaNota);
    let terceiraNota = Number(req.body.terceiraNota);

    let media = (primeiraNota + segundaNota + terceiraNota) / 3;

    let situacao;

    if (media >= 7) {
        situacao = "Aprovado";
    }else {
        situacao = "Reprovado";
    }

let aluno = {
    nome: req.body.nome,
    email: req.body.email,
    primeiraNota: req.body.primeiraNota,
    segundaNota: req.body.segundaNota,
    terceiraNota: req.body.terceiraNota,
    telefone: req.body.telefone,
    media: media,
    situacao: situacao,
};

Aluno.create(aluno).then(() => {
    console.log("Aluno cadastrado com sucesso!");
    res.redirect('/aluno');
});
        
};
listagem = async (req, res) => {
    const alunos = await Aluno.findAll();
    res.render('aluno/listagem', { aluno: alunos});
};

}

export default new AlunoController();