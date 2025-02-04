import banco from "../config/banco.js"

const Aluno = banco.sequelize.define("alunos", {
    id: {
        type: banco.Sequelize.INTEGER,
        primaryKey: true,   
        autoIncrement: true,
    },
    nome: {
        type: banco.Sequelize.STRING(50),
        allowNull: false,
    },
    email: {
        type: banco.Sequelize.STRING(50),
        allowNull: false,
    },
    primeiraNota: {
        type: banco.Sequelize.FLOAT,
        allowNull: false,
    },

    segundaNota: {
        type: banco.Sequelize.FLOAT,
        allowNull: false,
},
    terceiraNota: {
        type: banco.Sequelize.FLOAT,
        allowNull: false,
    },

    telefone: {
        type: banco.Sequelize.STRING(20),
        allowNull: false,
    },


});

Aluno.sync();

export default Aluno;