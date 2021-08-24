class CadastroDao{
    constructor(db){
        this.db = db
    }


getCadastro(){
    return new Promise((res, rej)=>{
        this.db.all('SELECT * FROM cadastro', (err, rows)=>{
            if(err){
                rej(err)
            }else{
                res(rows)
            }
        })
    })
}


getCadastro(CPF){
    return new Promise((res, rej)=>{
        this.db.all('SELECT * FROM cadastro WHERE CPF = ?', CPF, (err, rows)=>{
            if(err){
                rej(err)
            }else{
                res(rows)
            }
        })
    })
}


createCadastro(newCadastro){
    return new Promise((res, rej)=>{
        this.db.run(`INSERT INTO cadastro (nome, carta, idade, CPF)
        VALUES (?,?,?,?)`, [newCadastro.nome, newCadastro.carta, newCadastro.idade,
        newCadastro.CPF],
        (err)=>{
            if(err){
                rej(err)
            }else{
                res({'resultado': true})
            }
        })
    })
}


deleteCadastro(CPF){
    return new Promise((resolve, reject)=>{
        this.db.run(`DELETE FROM cadastro WHERE CPF = ?`, CPF,(err)=>{
            if(err){
                reject({"resultado" : 'Erro ao deletar'})
            }else{
                resolve({"resultado" : 'Cadastro deletado'})
            }
        })
        })
    }


updateCadastro(nome, carta, idade, CPF, id){
    return new Promise((resolve, reject)=>{

    let mudanca = [];
    let params = [id];
    let query = "UPDATE cadastro SET"

    if(nome != null){
        params.unshift(nome)
        mudanca.unshift(" NOME =?")
      
    }
    if(carta != null){
        params.unshift(carta)
        mudanca.unshift(" CArta=?")
        
    }
    if(idade != null){
        params.unshift(idade)
        mudanca.unshift(" IDADE =?")
       
    }
    if(CPF != null){
        params.unshift(CPF)
        mudanca.unshift(" CPF =?")
        
    }

    query += mudanca.join(',') + " WHERE ID = ?"

    
        this.db.run(query, params, (err)=>{
            if(err){
                reject({"resultado" : err})
            }else{
                resolve({"resultado" : 'Alterações realizadas'})
            }
        })
        })
    }

}

module.exports = CadastroDao