#! /usr/bin/env node

console.log('This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0-mbdj7.mongodb.net/local_library?retryWrites=true');

var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Hotel = require('./models/hotel')
var Quarto = require('./models/quarto')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var hoteis = [];
var quartos = [];


function hotelCreate(nome, descricao, local, zona, codigoPostal, pais, latitude, longitude, codigoRegiao, telefone, email, servicos, cb) {
    hotelDetail = {
        nome: nome,
        descricao: descricao,
        local: local,
        zona: zona,
        codigoPostal: codigoPostal,
        pais: pais,
        latitude: latitude,
        longitude: longitude,
        codigoRegiao: codigoRegiao,
        telefone: telefone,
        email: email,
        servicos: servicos
    }

    var hotel = new Hotel(hotelDetail);

    hotel.save(function(err) {
        if (err) {
            cb(err, null)
            return
        }
        console.log('Novo Hotel: ' + hotel);
        hoteis.push(hotel)
        cb(null, hotel)
    });
}

function quartoCreate(tipo, nrQuartos, precoAlta, precoBaixa, hotel, servicos, cb) {
    quartoDetail = {
        tipo: tipo,
        nrQuartos: nrQuartos,
        precoAlta: precoAlta,
        precoBaixa: precoBaixa,
        hotel: hotel,
        servicos: servicos
    }

    var quarto = new Quarto(quartoDetail);

    quarto.save(function(err) {
        if (err) {
            cb(err, null)
            return
        }
        console.log('Novo Quarto: ' + quarto);
        quartos.push(quarto)
        cb(null, quarto)
    });
}

function createHoteis(cb) {
    async.parallel([
        function(callback) {
            hotelCreate('Douro Vinhas', ['Com uma vista de cortar o f&ocirc;lego para o Rio Douro e para o Rio Tedo, &eacute; no cora&ccedil;&atilde;o do Douro Vinhateiro que surge o Hotel Douro Vinhas. Com uma forte componente de agro e enoturismo, esta unidade estende-se pela centen&aacute;ria Quinta do Moreira.', 'Na margem sul do Douro, perto da pitoresca aldeia do Marmelal, a propriedade que acolhe o Hotel Douro Vinhas fica muito pr&oacute;xima de um dos dois marcos mandados construir pelo Marqu&ecirc;s de Pombal em 1757. Classificados como im&oacute;veis de interesse p&uacute;blico, serviam para demarcar a zona dos vinhos generosos do Douro, &agrave; &eacute;poca sob jurisdi&ccedil;&atilde;o da Companhia Geral da Agricultura das Vinhas Douro. Nascia assim a primeira regi&atilde;o demarcada de vinhos do mundo. Hoje, os vinhedos em socalcos tornam &uacute;nica a paisagem que rodeia esta unidade.', 'Numa primeira fase com apenas sete quartos, o Hotel Douro Vinhas distingue-se pela localiza&ccedil;&atilde;o, pelo charme e pela exclusividade. Aqui poder&aacute; desfrutar da calma e do sil&ecirc;ncio, do cen&aacute;rio, mas tamb&eacute;m a piscina exterior, da gastronomia regional do restaurante Moreira, cujos grandes janel&otilde;es permitem admirar a envolvente. Mas tamb&eacute;m das visitas &agrave; adega e provas de vinhos do Porto, produzidos no local.', 'Poder&aacute; ainda aproveitar para passear entre as vinhas, pelo olival ou pelo amendoal (particularmente bonito durante as amendoeiras em flor), sempre com o Tedo e o Douro como companhia. Para completar a estadia, fa&ccedil;a um cruzeiro fluvial, visite as quintas vin&iacute;colas da regi&atilde;o ou fa&ccedil;a um passeio de comboio. Ver as amendoeiras em flor ou participar nas vindimas s&atilde;o outras sugest&otilde;es.', ], 'Hotel Douro Vinhas', 'Quinta do Moreira – Marmelal', '5110-672 Armamar', 'Portugal', '41°09\'26.0"N', '7°38\'26.0"W', 351, 254249000, 'dourovinhas@hoteispsi.com', ['Adega Moreira', 'Acesso gratuito &agrave; internet via wi-fi', 'Servi&ccedil;o de lavandaria', 'Acessos para pessoas com mobilidade reduzida', 'Rece&ccedil;&atilde;o 24 horas', 'Biblioteca', ], callback);
        },
        function(callback) {
            hotelCreate('A Ver o Mar', ['Situado na pitoresca vila da Ericeira, mesmo em cima da praia, este hotel com hist&oacute;ria e tradi&ccedil;&atilde;o, que resulta da reabilita&ccedil;&atilde;o do marcante Hotel de Turismo da Ericeira, tem como cen&aacute;rio o Oceano Atl&acirc;ntico.', 'A 30 minutos de Lisboa, com acesso direto por autoestrada, o hotel A Ver o Mar disp&otilde;e de quatro tipologias de quarto, destacando-se os que t&ecirc;m varanda e vista para o mar. Este hotel na Ericeira inclui um restaurante, dois bares, salas para eventos e reuni&otilde;es empresariais, clube de crian&ccedil;as e parque infantil e um moderno clube de sa&uacute;de com salas de massagens, jacuzzi, sauna, banho turco e gin&aacute;sio.', 'Durante a sua estadia no hotel A Ver o Mar, n&atilde;o deixe de dar um mergulho nas duas piscinas para adultos, uma das quais de &aacute;gua salgada. J&aacute; as crian&ccedil;as v&atilde;o adorar os escorregas aqu&aacute;ticos.', 'Partindo deste hotel na Ericeira, aventure-se a conhecer as praias da regi&atilde;o. E saiba que se apreciar desportos de ondas, est&aacute; em plena reserva mundial de surf, e palco de uma das etapas do circuito WSL World Tour que junta os melhores surfistas do mundo. Pode ainda visitar o Pal&aacute;cio Nacional de Mafra ou Sintra, a 20 minutos de dist&acirc;ncia do hotel A Ver o Mar, de carro.', 'No ver&atilde;o, a anima&ccedil;&atilde;o da vila aumenta gra&ccedil;as a v&aacute;rios festivais, entre os quais um dedicado exclusivamente &agrave; m&uacute;sica reggae.', ], 'Hotel A Ver o Mar', 'Largo dos Navegantes', '2655-320 Ericeira', 'Portugal', '38°57\'56.0"N', '9°25\'09.0"W', 351, 261869700, 'averomar@hoteispsi.com', ['Jardins e espa&ccedil;os exteriores', 'Piscina exterior para adultos e crian&ccedil;as', 'Acesso gratuito &agrave; internet via wi-fi', 'Parque de estacionamento', 'Nep Kids Club', 'Parque infantil', 'Sala de jogos', 'Servi&ccedil;o de lavandaria', 'Acessos para pessoas com mobilidade reduzida', 'Clube de sa&uacute;de', 'Rece&ccedil;&atilde;o 24 horas', ], callback);
        },
        function(callback) {
            hotelCreate('Mediterr&acirc;neo', ['Encontrar&aacute; o Hotel Mediterr&acirc;neo mesmo junto &agrave; praia e apenas a cinco minutos do centro de Albufeira, no Algarve.', 'Este hotel em Albufeira oferece quartos modernos e amplos, dos quais se destacam os com vista para o mar ou as su&iacute;tes. Todos t&ecirc;m kitchenette, sendo ideais para fam&iacute;lias com crian&ccedil;as.', 'Conta ainda com um bar, um restaurante com buffet internacional e piscinas exteriores para adultos e crian&ccedil;as, prometendo dias de muito sol e anima&ccedil;&atilde;o. Tem ainda uma sala de jogos, parque infantil, clube de crian&ccedil;as com atividades para os mais novos e animadores pr&oacute;prios, spa com piscina interior, banho turco e jacuzzi, salas de massagem, gin&aacute;sio e wi-fi gratuito em todas as zonas.', 'Durante a sua estadia aproveite para conhecer as irresist&iacute;veis praias de Albufeira, aventurar-se em desportos n&aacute;uticos ou desfrutar das animadas ruas da cidade, repletas de bares, restaurantes e com&eacute;rcio, ou passear na marina.', 'Pode tamb&eacute;m visitar diferentes parques tem&aacute;ticos como o Zoomarine, Aqualand e Aquashow.', ], 'Hotel Mediterr&acirc;neo', 'Praia da Gal&eacute;', '8200-995 Albufeira', 'Portugal', '37°04\'55.0"N', '8°19\'03.0"W', 351, 289570700, 'mediterraneo@hoteispsi.com', ['Jardins e espa&ccedil;os exteriores', 'Piscina exterior para adultos e crian&ccedil;as', 'Acesso gratuito &agrave; internet via wi-fi', 'Parque de estacionamento*', 'Nep Kids Club', 'Parque infantil', 'Sala de jogos', 'Servi&ccedil;o de lavandaria**', 'Acessos para pessoas com mobilidade reduzida', 'Clube de Sa&uacute;de***', 'Rece&ccedil;&atilde;o 24 horas', 'Lojas', ], callback);
        },
    ], cb);
}

function createQuartos(cb) {
    async.parallel([
        function(callback) {
            quartoCreate('Standard', 3, 270, 180, hoteis[0], ['Telefone', 'Wi-fi gratuito', 'Ar condicionado', 'Televis&atilde;o LED', 'Canais por cabo', 'Mini-bar', 'Cofre', 'Casa de banho privativa com telefone', 'Secador de cabelo', 'Espelho de maquilhagem', 'Produtos de higiene pessoal gratuitos', 'Fechadura eletr&oacute;nica de seguran&ccedil', 'Roup&atilde;o e chinelos', 'Maquina de caf&eacute;', ], callback);
        },
        function(callback) {
            quartoCreate('Suite', 1, 330, 250, hoteis[0], ['Telefone', 'Wi-fi gratuito', 'Ar condicionado', 'Televis&atilde;o LED', 'Canais por cabo', 'Cofre', 'Casa de banho privativa com telefone', 'Secador de cabelo', 'Espelho de maquilhagem', 'Produtos de higiene pessoal gratuitos', 'Fechadura eletr&oacute;nica de seguran&ccedil;a', 'Sala-de-estar', 'Roup&atilde;o e chinelos', 'Maquina de caf&eacute;', ], callback);
        },
        function(callback) {
            quartoCreate('Suite Duplex', 1, 350, 270, hoteis[0], ['Telefone', 'Wi-fi gratuito', 'Ar condicionado', 'Televis&atilde;o LED', 'Canais por cabo', 'Cofre', 'Casa de banho privativa com telefone', 'Secador de cabelo', 'Espelho de maquilhagem', 'Produtos de higiene pessoal gratuitos', 'Servi&ccedil;o de quarto 24 horas', 'Fechadura eletr&oacute;nica de seguran&ccedil;a', 'Sala-de-estar', 'Roup&atilde;o e chinelos', 'Maquina de caf&eacute;', ], callback);
        },
        function(callback) {
            quartoCreate('Suite Deluxe', 1, 450, 310, hoteis[0], ['Telefone', 'Wi-fi gratuito', 'Ar condicionado', 'Televis&atilde;o LED', 'Canais por cabo', 'Cofre', 'Casa de banho privativa com telefone', 'Secador de cabelo', 'Espelho de maquilhagem', 'Produtos de higiene pessoal gratuitos', 'Servi&ccedil;o de quarto 24 horas', 'Fechadura eletr&oacute;nica de seguran&ccedil;a', 'Sala-de-estar', 'Roup&atilde;o e chinelos', 'Maquina de caf&eacute;', ], callback);
        },
        function(callback) {
            quartoCreate('Standard', 182, 160, 90, hoteis[1], ['Telefone', 'Wi-fi gratuito', 'Ar condicionado', 'Televis&atilde;o LCD', 'Canais por cabo', 'Mini-bar', 'Cofre', 'Casa de banho privativa com telefone', 'Secador de cabelo', 'Produtos de higiene pessoal gratuitos', 'Fechadura eletr&oacute;nica de seguran&ccedil;a', 'Servi&ccedil;o de quarto 24 horas', 'Chaleira', ], callback);
        },
        function(callback) {
            quartoCreate('Suite Junior', 5, 180, 120, hoteis[1], ['Telefone', 'Wi-fi gratuito', 'Ar condicionado', 'Televis&atilde;o LCD', 'Canais por cabo', 'Mini-bar', 'Cofre', 'Casa de banho privativa com telefone', 'Secador de cabelo', 'Produtos de higiene pessoal gratuitos', 'Fechadura eletr&oacute;nica de seguran&ccedil;a', 'Servi&ccedil;o de quarto 24 horas', 'Sala-de-estar', 'Chaleira', ], callback);
        },
        function(callback) {
            quartoCreate('Suite Junior Superior', 15, 210, 130, hoteis[1], ['Telefone', 'Wi-fi gratuito', 'Ar condicionado', 'Televis&atilde;o LCD', 'Canais por cabo', 'Cofre', 'Casa de banho privativa com telefone', 'Secador de cabelo', 'Produtos de higiene pessoal gratuitos', 'Fechadura eletr&oacute;nica de seguran&ccedil;a', 'Servi&ccedil;o de quarto 24 horas', 'Sala-de-estar', 'Varanda', 'Chaleira', ], callback);
        },
        function(callback) {
            quartoCreate('Standard', 114, 210, 70, hoteis[2], ['Telefone', 'Wi-fi gr&aacute;tis', 'Ar Condicionado', 'Televis&atilde;o LCD', 'Canais por Cabo', 'Cofre', 'Casa de banho Privativa com telefone', 'Secador de Cabelo', 'Espelho de maquilhagem', 'Produtos de Higiene Pessoal Gratuitos', 'Kitchenette', 'Fechadura Eletr&oacute;nica de Seguran&ccedil;a', 'Servi&ccedil;o de Quarto 24 horas', 'Frigor&iacute;fico', 'Micro-ondas', 'Chaleira', ], callback);
        },
        function(callback) {
            quartoCreate('Suite Junior', 98, 250, 90, hoteis[2], ['Telefone', 'Wi-fi gr&aacute;tis', 'Ar Condicionado', 'Televis&atilde;o LCD', 'Canais por Cabo', 'Cofre', 'Casa de banho privativa com telefone', 'Secador de Cabelo', 'Espelho de maquilhagem', 'Produtos de Higiene Pessoal Gratuitos', 'Kitchenette', 'Fechadura Eletr&oacute;nica de Seguran&ccedil;a', 'Servi&ccedil;o de Quarto 24 horas', 'Varanda', 'Frigor&iacute;fico', 'Micro-ondas', 'Sala-de-estar', 'Chaleira', ], callback);
        },
        function(callback) {
            quartoCreate('Suite Senior', 8, 240, 120, hoteis[2], ['Telefone', 'Wi-fi gr&aacute;tis', 'Ar Condicionado', 'Televis&atilde;o LCD', 'Canais por Cabo', 'Cofre', 'Casa de banho Privativa com telefone', 'Secador de Cabelo', 'Espelho de maquilhagem', 'Produtos de Higiene Pessoal Gratuitos', 'Kitchenette', 'Fechadura Eletr&oacute;nica de Seguran&ccedil;a', 'Servi&ccedil;o de Quarto 24 horas', 'Sala de estar', 'Sof&aacute;-cama', 'Varanda', 'Frigor&iacute;fico', 'Micro-ondas', 'Chaleira', ], callback);
        },
    ], cb);
}

async.series([
        createHoteis,
        createQuartos
    ],
    function(err, results) {
        if (err) {
            console.log('FINAL ERR: ' + err);
        } else {
            console.log('Sucesso :D');

        }
        mongoose.connection.close();
    });