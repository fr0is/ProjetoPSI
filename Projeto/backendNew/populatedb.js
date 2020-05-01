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
            hotelCreate('Douro Vinhas', ['Com uma vista de cortar o fôlego para o Rio Douro e para o Rio Tedo, é no coração do Douro Vinhateiro que surge o Hotel Douro Vinhas. Com uma forte componente de agro e enoturismo, esta unidade estende-se pela centenária Quinta do Moreira.', 'Na margem sul do Douro, perto da pitoresca aldeia do Marmelal, a propriedade que acolhe o Hotel Douro Vinhas fica muito próxima de um dos dois marcos mandados construir pelo Marquês de Pombal em 1757. Classificados como imóveis de interesse público, serviam para demarcar a zona dos vinhos generosos do Douro, à época sob jurisdição da Companhia Geral da Agricultura das Vinhas Douro. Nascia assim a primeira região demarcada de vinhos do mundo. Hoje, os vinhedos em socalcos tornam única a paisagem que rodeia esta unidade.', 'Numa primeira fase com apenas sete quartos, o Hotel Douro Vinhas distingue-se pela localização, pelo charme e pela exclusividade. Aqui poderá desfrutar da calma e do silêncio, do cenário, mas também a piscina exterior, da gastronomia regional do restaurante Moreira, cujos grandes janelões permitem admirar a envolvente. Mas também das visitas à adega e provas de vinhos do Porto, produzidos no local.', 'Poderá ainda aproveitar para passear entre as vinhas, pelo olival ou pelo amendoal (particularmente bonito durante as amendoeiras em flor), sempre com o Tedo e o Douro como companhia. Para completar a estadia, faça um cruzeiro fluvial, visite as quintas vinícolas da região ou faça um passeio de comboio. Ver as amendoeiras em flor ou participar nas vindimas são outras sugestões.', ], 'Hotel Douro Vinhas', 'Quinta do Moreira – Marmelal', '5110-672 Armamar', 'Portugal', '41°09\'26.0"N', '7°38\'26.0"W', 351, 254249000, 'dourovinhas@hoteispsi.com', ['Adega Moreira', 'Acesso gratuito à internet via wi-fi', 'Serviço de lavandaria', 'Acessos para pessoas com mobilidade reduzida', 'Receção 24 horas', 'Biblioteca', ], callback);
        },
        function(callback) {
            hotelCreate('A Ver o Mar', ['Situado na pitoresca vila da Ericeira, mesmo em cima da praia, este hotel com história e tradição, que resulta da reabilitação do marcante Hotel de Turismo da Ericeira, tem como cenário o Oceano Atlântico.', 'A 30 minutos de Lisboa, com acesso direto por autoestrada, o hotel A Ver o Mar dispõe de quatro tipologias de quarto, destacando-se os que têm varanda e vista para o mar. Este hotel na Ericeira inclui um restaurante, dois bares, salas para eventos e reuniões empresariais, clube de crianças e parque infantil e um moderno clube de saúde com salas de massagens, jacuzzi, sauna, banho turco e ginásio.', 'Durante a sua estadia no hotel A Ver o Mar, não deixe de dar um mergulho nas duas piscinas para adultos, uma das quais de água salgada. Já as crianças vão adorar os escorregas aquáticos.', 'Partindo deste hotel na Ericeira, aventure-se a conhecer as praias da região. E saiba que se apreciar desportos de ondas, está em plena reserva mundial de surf, e palco de uma das etapas do circuito WSL World Tour que junta os melhores surfistas do mundo. Pode ainda visitar o Palácio Nacional de Mafra ou Sintra, a 20 minutos de distância do hotel A Ver o Mar, de carro.', 'No verão, a animação da vila aumenta graças a vários festivais,entre os quais um dedicado exclusivamente à música reggae.', ], 'Hotel A Ver o Mar', 'Largo dos Navegantes', '2655-320 Ericeira', 'Portugal', '38°57\'56.0"N', '9°25\'09.0"W', 351, 261869700, 'averomar@hoteispsi.com', ['Jardins e espaços exteriores', 'Piscina exterior para adultos e crianças', 'Acesso gratuito à internet via wi-fi', 'Parque de estacionamento', 'Nep Kids Club', 'Parque infantil', 'Sala de jogos', 'Serviço de lavandaria', 'Acessos para pessoas com mobilidade reduzida', 'Clube de saúde', 'Receção 24 horas', ], callback);
        },
        function(callback) {
            hotelCreate('Mediterrâneo', ['Encontrará o Hotel Mediterrâneo mesmo junto à praia e apenas a cinco minutos do centro de Albufeira, no Algarve.', 'Este hotel em Albufeira oferece quartos modernos e amplos, dos quais se destacam os com vista para o mar ou as suítes. Todos têm kitchenette, sendo ideais para famílias com crianças.', 'Conta ainda com um bar, um restaurante com buffet internacional e piscinas exteriores para adultos e crianças, prometendo dias de muito sol e animação. Tem ainda uma sala de jogos, parque infantil, clube de crianças com atividades para os mais novos e animadores próprios, spa com piscina interior, banho turco e jacuzzi, salas de massagem, ginásio e wi-fi gratuito em todas as zonas.', 'Durante a sua estadia aproveite para conhecer as irresistíveis praias de Albufeira, aventurar-se em desportos náuticos ou desfrutar das animadas ruas da cidade, repletas de bares, restaurantes e comércio, ou passear na marina.', 'Pode também visitar diferentes parques temáticos como o Zoomarine, Aqualand e Aquashow.', ], 'Hotel Mediterrâneo', 'Praia da Galé', '8200-995 Albufeira', 'Portugal', '37°04\'55.0"N', '8°19\'03.0"W', 351, 289570700, 'mediterraneo@hoteispsi.com', ['Jardins e espaços exteriores', 'Piscina exterior para adultos e crianças', 'Acesso gratuito à internet via wi-fi', 'Parque de estacionamento', 'Nep Kids Club', 'Parque infantil', 'Sala de jogos', 'Serviço de lavandaria', 'Acessos para pessoas com mobilidade reduzida', 'Clube de Saúde', 'Receção 24 horas', 'Lojas', ], callback);
        },
    ], cb);
}

function createQuartos(cb) {
    async.parallel([
        function(callback) {
            quartoCreate('Standard', 3, 270, 180, hoteis[0], ['Telefone', 'Wi-fi gratuito', 'Ar condicionado', 'Televisão LED', 'Canais por cabo', 'Mini-bar', 'Cofre', 'Casa de banho privativa com telefone', 'Secador de cabelo', 'Espelho de maquilhagem', 'Produtos de higiene pessoal gratuitos', '-', 'Fechadura eletrónica de segurança', '-', 'Roupão e chinelos', 'Maquina de café', ], callback);
        },
        function(callback) {
            quartoCreate('Suite', 1, 330, 250, hoteis[0], ['Telefone', 'Wi-fi gratuito', 'Ar condicionado', 'Televisão LED', 'Canais por cabo', '-', 'Cofre', 'Casa de banho privativa com telefone', 'Secador de cabelo', 'Espelho de maquilhagem', 'Produtos de higiene pessoal gratuitos', '-', 'Fechadura eletrónica de segurança', 'Sala-de-estar', 'Roupão e chinelos', 'Maquina de café', ], callback);
        },
        function(callback) {
            quartoCreate('Suite Duplex', 1, 350, 270, hoteis[0], ['Telefone', 'Wi-fi gratuito', 'Ar condicionado', 'Televisão LED', 'Canais por cabo', '-', 'Cofre', 'Casa de banho privativa com telefone', 'Secador de cabelo', 'Espelho de maquilhagem', 'Produtos de higiene pessoal gratuitos', 'Serviço de quarto 24 horas', 'Fechadura eletrónica de segurança', 'Sala-de-estar', 'Roupão e chinelos', 'Maquina de café', ], callback);
        },
        function(callback) {
            quartoCreate('Suite Deluxe', 1, 450, 310, hoteis[0], ['Telefone', 'Wi-fi gratuito', 'Ar condicionado', 'Televisão LED', 'Canais por cabo', '-', 'Cofre', 'Casa de banho privativa com telefone', 'Secador de cabelo', 'Espelho de maquilhagem', 'Produtos de higiene pessoal gratuitos', 'Serviço de quarto 24 horas', 'Fechadura eletrónica de segurança', 'Sala-de-estar', 'Roupão e chinelos', 'Maquina de café', ], callback);
        },
        function(callback) {
            quartoCreate('Standard', 182, 160, 90, hoteis[1], ['Telefone', 'Wi-fi gratuito', 'Ar condicionado', 'Televisão LCD', 'Canais por cabo', 'Mini-bar', 'Cofre', 'Casa de banho privativa com telefone', 'Secador de cabelo', 'Produtos de higiene pessoal gratuitos', 'Fechadura eletrónica de segurança', 'Serviço de quarto 24 horas', '-', '-', 'Chaleira', ], callback);
        },
        function(callback) {
            quartoCreate('Suite Junior', 5, 180, 120, hoteis[1], ['Telefone', 'Wi-fi gratuito', 'Ar condicionado', 'Televisão LCD', 'Canais por cabo', 'Mini-bar', 'Cofre', 'Casa de banho privativa com telefone', 'Secador de cabelo', 'Produtos de higiene pessoal gratuitos', 'Fechadura eletrónica de segurança', 'Serviço de quarto 24 horas', 'Sala-de-estar', '-', 'Chaleira', ], callback);
        },
        function(callback) {
            quartoCreate('Suite Junior Superior', 15, 210, 130, hoteis[1], ['Telefone', 'Wi-fi gratuito', 'Ar condicionado', 'Televisão LCD', 'Canais por cabo', 'Cofre', 'Casa de banho privativa com telefone', 'Secador de cabelo', 'Produtos de higiene pessoal gratuitos', 'Fechadura eletrónica de segurança', 'Serviço de quarto 24 horas', 'Sala-de-estar', 'Varanda', 'Chaleira', ], callback);
        },
        function(callback) {
            quartoCreate('Standard', 114, 210, 70, hoteis[2], ['Telefone', 'Wi-fi grátis', 'Ar Condicionado', 'Televisão LCD', 'Canais por Cabo', 'Cofre', 'Casa de banho privativa com telefone', 'Secador de Cabelo', 'Espelho de maquilhagem', 'Produtos de Higiene Pessoal Gratuitos', 'Kitchenette', 'Fechadura Eletrónica de Segurança', 'Serviço de Quarto 24 horas', '-', '-', 'Frigorífico', 'Micro-ondas', '-', 'Chaleira', ], callback);
        },
        function(callback) {
            quartoCreate('Suite Junior', 98, 250, 90, hoteis[2], ['Telefone', 'Wi-fi grátis', 'Ar Condicionado', 'Televisão LCD', 'Canais por Cabo', 'Cofre', 'Casa de banho privativa com telefone', 'Secador de Cabelo', 'Espelho de maquilhagem', 'Produtos de Higiene Pessoal Gratuitos', 'Kitchenette', 'Fechadura Eletrónica de Segurança', 'Serviço de Quarto 24 horas', '-', 'Varanda', 'Frigorífico', 'Micro-ondas', 'Sala-de-estar', 'Chaleira', ], callback);
        },
        function(callback) {
            quartoCreate('Suite Senior', 8, 240, 120, hoteis[2], ['Telefone', 'Wi-fi grátis', 'Ar Condicionado', 'Televisão LCD', 'Canais por Cabo', 'Cofre', 'Casa de banho privativa com telefone', 'Secador de Cabelo', 'Espelho de maquilhagem', 'Produtos de Higiene Pessoal Gratuitos', 'Kitchenette', 'Fechadura Eletrónica de Segurança', 'Serviço de Quarto 24 horas', 'Sofá-cama', 'Varanda', 'Frigorífico', 'Micro-ondas', 'Sala-de-estar', 'Chaleira', ], callback);
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