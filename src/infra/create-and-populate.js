const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

// Tabela Cardápio
const CARDAPIO_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CARDAPIO" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "FOTO" varchar(255),
    "DESCRICAO" varchar(255)
  );`;


const ADD_CARDAPIO_DATA = `
INSERT INTO CARDAPIO (ID, NOME, FOTO, DESCRICAO)
VALUES 
    (1, 'Tradicional Burguer','https://www.sabornamesa.com.br/media/k2/items/cache/b9ad772005653afce4d4bd46c2efe842_XL.jpg', 'pão crocante com bacon e ervas, molho BBQ, alface americana, tomate, hambúrguer de costela recheado com queijo, molho cremoso da casa e bacon crocante.'),
    (2,'Vegetariano Burguer','https://veganandcolors.com/wp-content/uploads/2020/04/b2-3-1010x1024.jpg','pão integral, molho de alho da casa, rúcula, tomate, muçarela de búfala e hambúrguer de berinjela com champignon, PTS e alho poró'),
    (3,'Onion e Bacon Burguer','https://conteudo.imguol.com.br/c/entretenimento/c9/2020/05/27/hamburguer-com-bacon-onion-rings-e-mel-de-laranjeira-1590607523647_v2_615x300.jpg','pão de hambúrguer, hambúrguer bovino, alface, cheddar, bacon, onion rings e maionese.'),
    (4,'Gorgonzola Burguer','https://media.gazetadopovo.com.br/bomgourmet/2017/09/bulls-9-cwburguer-fest-6d0e7400.jpg', 'pão de hambúrguer, hambúrguer de 200g de carne angus, cheddar fatiado, tomate em rodelas, cebola chapeada regada com molho barbecue, queijo gorgonzola, farofa de bacon e molho de requeijão com manjericão fresco.'),
    (5,'Spicy Burguer','https://www.reviewbox.com.br/wp-content/uploads/2021/04/curso-de-hamburguer-artesanal-0-mafe-estudio-LV2p9Utbkbw-unsplash-scaled.jpg','maionese de abacate, alface, tomate, hambúrguer de 200g grelhado no fogo com queijo cheddar derretido, chilli e pimentas jalapeños no pão brioche com opção de pão francês.'),
    (6,'Chicken Burguer','https://mobkitchen-objects.imgix.net/recipes/9K8A8485.jpg?auto=format&crop=focalpoint&domain=mobkitchen-objects.imgix.net&fit=crop&fp-x=0.5&fp-y=0.5&h=1300&ixlib=php-3.3.0&q=82&w=1300&s=5e41959893f05c8f4616954a030c85c1','dois hambúrgueres de peito de frango grelhados, duas fatias de queijo muçarela e vinagrete. Tudo empanado na farofinha de pancetta e frito por imersão. Coberto com catchup, molho verde e maionese, com um toque de orégano.'),
    (7,'Mac & Cheese burguer','https://www.sweetbabyrays.com/getattachment/0d36ac52-0d7c-450a-a997-76db2255bedb/BBQ-Mac-and-Cheese-Burger','pão cervejinha, 2 hambúrguer 100% angus, bacon e mac & cheese.'),
    (8,'Kids Burguer','https://www.bonde.com.br/img/bondenews/2014/06/img_1_33_7403.jpg','4 mini hambueres com carne bovina, pão brioche, bacon,queijo cheddar e alface americana'),
    (9,'Vegano Burguer','https://violifefoods.com/wp-content/uploads/2020/12/vegan-spicy-burger-1920x850.jpg','pão defumado, hambúrguer de 150g de cogumelos, queijo muçarela vegan, creme de castanhas vegan, cebola roxa, alface americana e relish de pepino.'),
    (10,'Porcão Burguer','https://media.gazetadopovo.com.br/bomgourmet/2017/09/barteli-9-cwburguer-fest-6d0e7400.jpg','pão australiano, hambúrguer de pernil 220g, crispy de bacon, queijo cheddar, molho barbecue da casa, maionese, aioli, tomate cereja e alface romana.')
    `

function criaTabelaCardapio() {
    db.run(CARDAPIO_SCHEMA, (error)=> {
        if(error) console.log("Erro ao criar tabela de cardapio");
    });
}
    
function populaTabelaCardapio() {
    db.run(ADD_CARDAPIO_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de cardapio");
    });
}


// Tabela Avaliação

const AVALIACAO_SCHEMA = `
CREATE TABLE IF NOT EXISTS "AVALIACAO" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "TELEFONE" varchar(64),
    "COMENTARIOS" varchar(300),
    "NOTA" INT
);;`


const ADD_AVALIACAO_DATA = `
INSERT INTO AVALIACAO (ID, NOME, TELEFONE, COMENTARIOS, NOTA) 
VALUES
    (1, 'Roberta de Sá', '992590606', 'Sabor indescritível, carne suculenta e preço justo', 10),
    (2, 'Filipe Ribeiro', '992550303', 'Sem palavras para descrever a sensação que é comer esse lanche', 9),
    (3, 'Maria Lima', '985000321', 'Uma explosão de sabores', 9)
`

function criaTabelaAvaliacao() {
        db.run(AVALIACAO_SCHEMA, (error)=> {
            if(error) console.log("Erro ao criar tabela de avaliação");
        });
    }


function populaTabelaAvaliacao() {
    db.run(ADD_AVALIACAO_DATA, (error)=> {
        if (error) console.log("Erro ao popular tabela de avaliação");
    });
}


// Tabela Curriculo

const CADASTRO_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CADASTRO" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(50),
    "TELEFONE" int,
    "IDADE" int,
    "CARTA" varchar(350)
  );`;

function criaTabelaCurriculo() {
    db.run(CADASTRO_SCHEMA, (error)=> {
        if (error) console.log("Erro ao criar a tabela de cadastro");
     });
}


db.serialize( ()=> {
    criaTabelaCardapio();
    populaTabelaCardapio(); 
    criaTabelaAvaliacao();
    populaTabelaAvaliacao(); 
    criaTabelaCurriculo();
});