//Requisição 
const Cadastro = require('../models/Cadastro.model');
const CadastroDao = require('../DAO/CadastroDao');


function cadastro(app, bd){
    let ccDAO = new CadastroDao(bd);
    app.get('/cadastros', async (req, res) => {

      try{
        let rows = await ccDAO.getCadastros()
        res.json({'result': rows})
      }
      catch(e){
        res.json({'erro': e.message})
      }
      })

    app.get('/cadastros/:CPF', async (req, res) => {

        try{
          let CPF = req.params.CPF;
          let rows = await ccDAO.getCadastro(CPF)
          res.json({'result': rows})
        }
        catch(e){
          res.json({'erro': e.message})
        }
        })

    app.post('/cadastros', async (req, res, next) => {
      try{
        let {nome, carta, idade, CPF} = req.body
        let newCadastro = new Cadastro(nome, carta, idade, CPF)
        let rows = await ccDAO.createCadastro(newCadastro)
        res.json({
          'message': 'cadastro adicionado',
          'result': rows})
      }
      catch(e){
        res.json({'erro': e.message})
      }
      })
    app.delete('/cadastros/:CPF', async (req, res)=>{
      try{
        let CPF = req.params.CPF
        let rows = await ccDAO.deleteCadastro(CPF)
        res.json({
          'message': 'cadastro deletado',
        'result': rows})
      }
      catch(e){
        res.json({'erro': e.message})
      }
      })

    app.put('/cadastros/:id', async (req, res)=>{
      try{
        let id = req.params.id
        let {nome, carta, idade, CPF} = req.body
        let rows = await ccDAO.updateCadastro(nome, carta, idade, CPF, id)
        res.json({
          'message': 'cadastro atualizado',
          'result': rows})
      }
      catch(e){
        res.json({'erro': e.message})
      }
    })
}


module.exports = cadastro