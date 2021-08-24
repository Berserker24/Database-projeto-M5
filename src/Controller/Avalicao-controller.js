const AssessmentsDao = require("../Dao/Avaliacao-Dao");
const AssessmentsModel = require("../Model/Avaliacao-model");
//importar a model que ainda nem foi criada

module.exports = (app, bd) => {
  let DaoAssessments = new AssessmentsDao(bd);

  //buscando  avaliações

  app.get("/assessments", async (req, res) => {
    try {
      const results = await DaoAssessments.selectAll();
      res.json({
        result: results,
        countresulst: results.length,
        error: false,
      });
    } catch (err) {
      res.json({
        error: err.mensage,
      });
    }
  });

  app.get("/assessments/:NOME", async (req, res) => {
    try {
      const nome = req.params.NOME;
      const results = await DaoAssessments.selectName(nome);

      res.json({
        result: results,
        error: false,
      });
    } catch (err) {
      res.json({
        error: err.mensage,
      });
    }
  });

  //add avaliações
  app.post("/assessments/new", async (req, res) => {
    try {
      const { NOME, TELEFONE, COMENTARIOS, NOTA } = req.body;

      let assessments = new AssessmentsModel(NOME, TELEFONE, COMENTARIOS, NOTA);

      const results = await DaoAssessments.addAssessments(assessments);

      res.json({
        result: results,
        error: false,
      });
    } catch (err) {
      res.json({
        error: err.mensage,
      });
    }
  });

  //deletando avaliação
  app.delete("/assessments/delete/:NOME", async (req, res) => {
    try {
      const nome = req.params.NOME;

      const results = await DaoAssessments.deleteAssessments(nome);

      res.json({
        result: results,
        error: false,
      });
    } catch (err) {
      res.json({
        error: err.mensage,
      });
    }
  });

  //atualizando funcionario
  app.put("/assessments/update/:ID", async (req, res) => {
    try {
      const id = req.params.ID;

      const body = req.body;

      const infos = [body.NOME, body.TELEFONE, body.COMENTARIOS, body.NOTA];

      const results = await DaoAssessments.updateAssessments(infos, id);

      res.json({
        result: results,
        error: false,
      });
    } catch (err) {
      res.json({
        error: err.mensage,
      });
    }
  });
};
