const CardapioDAO = require('../DAO/CardapioDAO');

module.exports = (app,db) => { 
    const BancoCardapio = new CardapioDAO(db)

    app.get('/Cardapio',async (req,res)=>{
        try{
            const resposta = await BancoCardapio.TodoCardapio();
            res.send(resposta);
        }
        catch
        {
            res.send("Erro ao mostrar o cardápio")
        }
    })
}