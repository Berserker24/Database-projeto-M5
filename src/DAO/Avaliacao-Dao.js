module.exports = class Assessments {
  constructor(bd) {
    this.bd = bd;
  }

  //Mostrar todas Avaliações
  selectAll() {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM AVALIACAO`;

      this.bd.all(query, (error, rows) => {
        if (error) reject(`Error ao acessar o bd ${error}`);
        else resolve(rows);
      });
    });
  }

  //selecionar avaliacao pelo nome da pessoa
  selectName(name) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM AVALIACAO WHERE NOME = (?)`;

      this.bd.get(query, name, (error, row) => {
        if (error) reject(`Erro ao acessar o bd ${error}`);
        else resolve(row);
      });
    });
  }

  //add nova avaliação
  addAssessments(infos) {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO AVALIACAO (NOME, TELEFONE, COMENTARIOS, NOTA) VALUES (?,?,?,?)`;

      let objAssessments = Object.values(infos);

      this.bd.run(query, objAssessments, (error) => {
        if (error) reject(`${error}`);
        else resolve("Nova avaliação adicionada com sucesso!");
      });
    });
  }

  //deletando avaliação
  deleteAssessments(name) {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM AVALIACAO WHERE NOME = (?)`;

      this.bd.run(query, name, (error) => {
        if (error) reject(`${error}`);
        else resolve(`Avaliação feita por ${name}, foi delatada com sucesso!`);
      });
    });
  }

  //atualizando avaliação
  updateAssessments(infos, id) {
    return new Promise((resolve, reject) => {
      const query = `UPDATE AVALIACAO SET NOME = (?), TELEFONE = (?), COMENTARIOS = (?), NOTA = (?) WHERE ID = (?)`;

      const AssessmentsUpdate = [infos[0], infos[1], infos[2], infos[3], id];

      this.bd.run(query, AssessmentsUpdate, (error) => {
        if (error)
          reject(`Erro ao atualizar a avaliação de id ${id}. ${error}`);
        else resolve(`Avaliação com ID ${id} foi atualizada com sucesso.`);
      });
    });
  }
};
